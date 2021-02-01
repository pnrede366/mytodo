function requierdError(el) {
    if (el.value.trim() === "") {
        // if data not present / empty
        el.classList.add("is-invalid");
        if (el.dataset.error != undefined) {
            document.querySelector("#" + el.id + "+ span").innerHTML =
                el.dataset.error;
            return true;
        } else {
            document.querySelector("#" + el.id + "+ span").innerHTML =
                "Please Enter Something";
            return true;
        }
    } else {
        // if data present
        el.classList.remove("is-invalid");
        el.classList.add("is-valid");
        return false;
    }
}