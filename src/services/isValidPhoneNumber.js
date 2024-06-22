
const isValidPhoneNumber = (str) => {

    const phoneRegex = /^(\+91[\s-]?)?[6-9]\d{9}$/;
    return phoneRegex.test(str);

};

export default isValidPhoneNumber;