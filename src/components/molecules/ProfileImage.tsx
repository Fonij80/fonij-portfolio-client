import myImage from "../../assets/Me.png";

export const ProfileImage = () => {
    return (
        <div className="z-10 rounded-full overflow-hidden w-96 h-auto mx-auto lg:ml-80">
            <img
                src={myImage}
                alt="Foroozan Iraji"
                className="object-cover w-full h-full"
            />
        </div>
    );
}
