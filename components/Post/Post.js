import Footer from '../Footer/Footer'

const Post = () => {
    return (
        <div className="h-36 bg-red-200 m-2 rounded-xl flex justify-start">
            <p className="absolute opacity-20">Post example</p>
            <img src="img.jpg" alt="Some image" className="p-5 w-1/5 h-1/5" />
            <p className="p-4 max-w-screen-sm">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id pulvinar elit, vel viverra est. Etiam ornare mattis pharetra. In sollicitudin orci risus, non volutpat massa suscipit a.</p>
        </div>
    )
}

export default Post
