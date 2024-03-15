const url = "https://api-videos-para-trabalho-ptac.vercel.app";

const getVideo = async (id) => {
    try {
        const responseOfAPI = await fetch(`${url}/video/${id}`, {
            cache: 'no-cache'
        });
        const video = await responseOfAPI.json();
        return video;
    } catch {
        return null;
    }
}

const getAllVideos = async () => {
    try {
        const responseOfAPI = await fetch(`${url}/videos`, {
            cache: 'no-cache'
        });
        const videos = await responseOfAPI.json();
        return videos;
    } catch {
      return null;
    }
}

const postVideo = async (video) => {
    try {
        const responseOfAPI = await fetch(`${url}/video`, {
            method: "POST",
            headers: { "Content-Type": "Application/json" },
            body: JSON.stringify(video)
        });
    } catch {
      return null;
    }
}

export { getVideo, getAllVideos, postVideo };