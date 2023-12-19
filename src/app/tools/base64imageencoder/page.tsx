import Base64ImageEncoderComponent from "@/app/tools/base64imageencoder/Base64ImageEncoderComponent";
import {getCurrentUser} from "@/actions/user";

const Base64ImageEncoder = async () => {
    const {user} = await getCurrentUser();
    return <Base64ImageEncoderComponent user={user}/>;
};
export default Base64ImageEncoder;
