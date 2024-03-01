import './style.scss';

export default const CardList = () => {
    return (
        <div className="container">
            {
                vídeos.map((vídeo) => {
                    <Card data={video} />
                }
            }
        </div>
    );
}