import AccessAPI from "./AccessApi";

class AccessApiWrapper extends AccessAPI {
    getData(item) {
        return super.getData(item);
    }

    postFormData(urlExtension, data) {
        return super.postFormData(urlExtension, data);
    }

    deleteData(urlExtension, uid) {
        return super.deleteData(urlExtension, uid);
    }
}

export default AccessApiWrapper;
