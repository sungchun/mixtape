import PreviewTrackCard from './PreviewTrackCard.js'
const PreviewPage = ({ mixtapeTracks }) => {

    return (
        <div className='mixtape_page_div'>
            {
                mixtapeTracks.map((song) => (
                    <li>
                        <PreviewTrackCard song={song} />
                    </li>
                ))
            }
        </div>
    )
}
export default PreviewPage