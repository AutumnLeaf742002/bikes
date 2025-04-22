export const useInputAuth = (type) => {

    const getIcon = () => {
        switch (type) {
            case "user":
                return "user";
            case "mail":
                return "mail";
            case "password":
                return "lock";
            default:
                return "user";
        }
    }

    const getType = () => {
        switch (type) {
            case "mail":
                return "mail";
            case "password":
                return "password";
            default:
                return "text";
        }
    }

    return {
        getIcon,
        getType
    }
}