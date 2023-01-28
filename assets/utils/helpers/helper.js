const {NUMBER, TEXT, DATE, BOOLEAN} = constants;

function getTag(obj){
    const {key, type} = obj;
    let input = null;
    switch(type){
        case NUMBER:
        case TEXT:
        case DATE:
            input = document.createElement("input");
            input.type = type;
            input.name = key;
            break;

        case BOOLEAN:
            input = document.createElement("select");
            input.name = key;
            // option 1 
            let option = document.createElement("option");
            option.value = "true";
            option.text = option.value;
            input.append(option);

            // option 2
            option = document.createElement("option");
            option.value = "false";
            option.text = option.value;
            input.append(option);

            break;

        default:
            // return default
            input = document.createElement("input");
            input.type = TEXT;
            input.name = key;
            break;
    }

    return input;
}