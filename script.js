const hasNumber = /\d/;
const pricing = {
    "two-wheeler": [5, 100, 500],
    "three-wheeler": [10, 200, 1000],
    "four-wheeler": [20, 500, 3500]
};

let currentItem1 = {
    itemIndex:0,
    employeeName: "",
    employeeGender: "",
    employeeEmail: "",
    employeePassword: "",
    employeeNumber: ""
};

let currentItem2 = {
    itemIndex: 0,
    vehicleCompany: "",
    vehicleModel: "",
    vehicleType: "",
    vehicleNumber: "",
    employeeId: "",
    vehicleDescription: ""
};

function hideSection(elements){
    for(const element of elements){
        element.style.display = "none";
    }
}

function nextEmployeeSection(){
    let elements = document.getElementsByClassName("employee_form_item");
    let formMessage = document.getElementById("employee_form_message");
    
    if(currentItem1.itemIndex < elements.length){
        if(currentItem1.itemIndex == 0){
            let textBox = document.getElementById("employee-name");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 2 || hasNumber.test(textBoxValue)){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid name";
                return;
            } 
            currentItem1.employeeName = textBoxValue;
            let label = document.getElementById("employee_form_gender_label");
            label.innerText = "Hi " + currentItem1.employeeName + ", Can I know your gender.";
        }else if(currentItem1.itemIndex == 1){
            let radio1 = document.getElementById("employee-gender-male");
            let radio2 = document.getElementById("employee-gender-female");
            let radio3 = document.getElementById("employee-gender-other");

            if(!radio1.checked && !radio2.checked && !radio3.checked){
                formMessage.style.display = "block";
                formMessage.innerText = "Select one of the options";
                return;
            };
            let label = document.getElementById("employee_form_email_label");
            label.innerText = "Hi " + currentItem1.employeeName + ", Can I know your Email.";
        }else if(currentItem1.itemIndex == 2){
            let textBox = document.getElementById("employee-email");
            let textBoxValue = textBox.value;

            if(!textBox.validity.valid){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid email";
                return;
            };
            currentItem1.employeeEmail = textBoxValue;

            document.getElementById("employee-password").addEventListener("blur", (e)=>{
                if(e.target.value.length < 8){
                    e.target.style.border = "2px solid red";
                }else if(e.target.value.length < 10){
                    e.target.style.border = "2px solid orange";
                }else if(e.target.value.length < 12){
                    e.target.style.border = "2px solid yellow";
                }else{
                    e.target.style.border = "2px solid green";
                }
            });
            document.getElementById("employee-password-confirmation").addEventListener("focusout", (e)=>{
                if(e.target.value.length < 8){
                    e.target.style.border = "2px solid red";
                }else if(e.target.value.length < 10){
                    e.target.style.border = "2px solid orange";
                }else if(e.target.value.length < 12){
                    e.target.style.border = "2px solid yellow";
                }else{
                    e.target.style.border = "2px solid green";
                }
            });
        }else if(currentItem1.itemIndex == 3){
            let textBox1 = document.getElementById("employee-password");
            let textBox2 = document.getElementById("employee-password-confirmation");
            let textBoxValue1 = textBox1.value;
            let textBoxValue2 = textBox2.value;

            if(!textBox1.validity.valid || !textBox2.validity.valid || textBoxValue1!==textBoxValue2) return;
            currentItem1.employeePassword = textBoxValue1;

            let button = document.getElementById("employee_form_button");
            button.innerText = "Add Employee";
        }else{
            let textBox = document.getElementById("employee-phone-number");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 8){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid number";
                return;
            };
            currentItem1.employeeNumber = textBoxValue;

            let employeeSection = document.getElementById("employee_section");
            employeeSection.style.display = "none";
            let vehicleSection = document.getElementById("vehicle_section");
            vehicleSection.style.display = "block";

            return;
        }

        currentItem1.itemIndex++;
        hideSection(elements);
        elements[currentItem1.itemIndex].style.display = "block";
        formMessage.innerText = "";
        formMessage.style.display = "none";
    }else{
        elements[elements.length - 1].style.display = "block";
    }
}

function nextVehicleSection(){
    let elements = document.getElementsByClassName("vehicle_form_item");
    let formMessage = document.getElementById("vehicle_form_message");

    if(currentItem2.itemIndex < elements.length){
        if(currentItem2.itemIndex == 0){
            let textBox = document.getElementById("vehicle-company");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 2){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid company name";
                return;
            } 
            currentItem2.vehicleCompany = textBoxValue;
        }else if(currentItem2.itemIndex == 1){
            let textBox = document.getElementById("vehicle-model");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 2){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid model name";
                return;
            } 
            currentItem2.vehicleModel = textBoxValue;
        }else if(currentItem2.itemIndex == 2){
            let selectBox = document.getElementById("vehicle-type");
            let textBoxValue = selectBox.value;

            if(textBoxValue === "none"){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid vehicle type";
                return;
            } 
            currentItem2.vehicleType = textBoxValue;
        }else if(currentItem2.itemIndex == 3){
            let textBox = document.getElementById("vehicle-number");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 6){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid vehicle number";
                return;
            } 
            currentItem2.vehicleNumber = textBoxValue;
        }else if(currentItem2.itemIndex == 4){
            let textBox = document.getElementById("vehicle-employee-id");
            let textBoxValue = textBox.value;

            if(textBoxValue.length < 4){
                formMessage.style.display = "block";
                formMessage.innerText = "Enter valid id";
                return;
            } 
            currentItem2.employeeId = textBoxValue;
        }else{
            let textArea = document.getElementById("vehicle-identification");
            let textAreaValue = textArea.value;
            currentItem2.vehicleDescription = textAreaValue;

            let vehicleSection = document.getElementById("vehicle_section");
            vehicleSection.style.display = "none";
            
            showPricingSection()

            return;
        }
        
        currentItem2.itemIndex++;
        hideSection(elements);
        elements[currentItem2.itemIndex].style.display = "block";
        formMessage.innerText = "";
        formMessage.style.display = "none";
    }else{
        elements[elements.length - 1].style.display = "block";
    }
}

function showPricingSection(){
    let pricingSection = document.getElementById("pricing_section");
    pricingSection.style.display = "block";

    let pricingOptions = document.getElementsByClassName("pricing_value");
    let i = 0;
    for(const option of pricingOptions){
        option.innerText = pricing[currentItem2.vehicleType][i];
        i++;
    }
}

function initialize(){
    let vehicleSection = document.getElementById("vehicle_section");
    vehicleSection.style.display = "none";
    let pricingSection = document.getElementById("pricing_section");
    pricingSection.style.display = "block";

    let elements1 = document.getElementsByClassName("employee_form_item");
    let elements2 = document.getElementsByClassName("vehicle_form_item");
    hideSection(elements1);
    hideSection(elements2);
    elements1[0].style.display = "block";
    elements2[0].style.display = "block";

    let radios = document.getElementsByClassName("employee-gender-radio");
    for(const radio of radios){
        radio.addEventListener("change", (e)=>{
            currentItem1.employeeGender = e.target.value;
        })
    }
}