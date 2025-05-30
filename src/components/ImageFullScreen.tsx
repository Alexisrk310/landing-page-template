interface PropsImage {
	image?: string;
}
const ImageFullScreen = ({ image }: PropsImage) => {
	return (
		<img
			src={image}
			className="w-screen h-[30rem] object-cover object-bottom-right"
			alt="Comidas"
		/>
	);
};

export default ImageFullScreen;
