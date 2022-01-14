function validate() {
    var result = validateEmailAddress();
    return result;
}

function validateEmailAddress() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
        return validatePhoneNumber()
    }
    alert("You have entered an invalid email address!")
    document.getElementById("email").focus();
    return (false)
}
function validatePhoneNumber() {
    if (/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/.test(document.getElementById("phone").value)) {
        return validateCardNumber()
    }
    alert("Please check the phone number you have entered!")
    document.getElementById("phone").focus();
    return (false)
}

function validateCardNumber() {
    number = document.getElementById("ccnum").value;
    if (/^[0-9]{16}$/.test(number)) {
        return validateCVV()
    }
    alert("Credit card number you have entered is not valid,please enter 16 digit valid number!")
    document.getElementById("ccnum").focus();
    return (false)

}
function validateCVV() {
    number = document.getElementById("cvv").value;
    if (/^[0-9]{3,4}$/.test(number)) {
        return true
    }
    alert("CVV you have entered is not valid!")
    document.getElementById("cvv").focus();
    return (false)

}

var countryStateInfo = {
    "USA": {
        "California": {
            "Los Angeles": ["90001", "90002", "90003", "90004"],
            "San Diego": ["92093", "92101"]
        },
        "Texas": {
            "Dallas": ["75201", "75202"],
            "Austin": ["73301", "73344"]
        }
    },
    "India": {
        "Assam": {
            "Dispur": ["781005"],
            "Guwahati": ["781030", "781030"]
        },
        "Gujarat": {
            "Vadodara": ["390011", "390020"],
            "Surat": ["395006", "395002"]
        }
    }
}