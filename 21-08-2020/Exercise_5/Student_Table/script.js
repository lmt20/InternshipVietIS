const bodyTable = $('#body-table');
const resetButtonEle = $('#reset-table');

const lastName = ['Lê', 'Phạm', 'Nguyễn', 'Vũ', 'Kiều', 'Trần', 'Đoàn', 'Phùng', 'Lường', 'Đào', 'Phan'];
const maleMiddleName = ['Văn', 'Mạnh', 'Trọng', 'Quang', 'Hoàng'];
const femaleMiddleName = ['Thị', 'Diễm', 'Thu', 'Thị', 'Thu', 'Thanh'];
const maleFirstName = ['Trường', 'Minh', 'Tùng', 'Lâm', 'Toàn', 'Hiếu', 'Nghĩa', 'Long', 'Nhật', 'Bách', 'Trung'];
const femaleFirstName = ['Linh', 'Hà', 'Quỳnh', 'Hằng', 'Mai', 'Thảo', 'Diệp', 'Chi', 'Uyên', 'Bích'];

const generateIndex = (length) => {
    return Math.floor(Math.random() * length);
}
const generateFullname = () => {
    const lastNameGenerate = lastName[generateIndex(lastName.length)];
    if (Math.random() > 0.5) {
        const maleMiddleNameGenerate = maleMiddleName[generateIndex(maleMiddleName.length)];
        const maleFirstNameGenerate = maleFirstName[generateIndex(maleFirstName.length)];
        return lastNameGenerate + " " + maleMiddleNameGenerate + " " + maleFirstNameGenerate;
    } else {
        const femaleMiddleNameGenerate = femaleMiddleName[generateIndex(femaleMiddleName.length)];
        const femaleFirstNameGenerate = femaleFirstName[generateIndex(femaleFirstName.length)];
        return lastNameGenerate + " " + femaleMiddleNameGenerate + " " + femaleFirstNameGenerate;
    }
}

// create rows
for (let index = 0; index < 12; index++) {
    const rowElement = $('<tr></tr>').attr('id', `row-${index + 1}`);
    const numIndexEle = $('<td></td>').html(index + 1);

    const fullNameEle = $('<td></td>');
    const inputNameEle = $('<input>');
    const fullNameStr = generateFullname();
    inputNameEle.val(fullNameStr)
    fullNameEle.append(inputNameEle);
    //hidden textNode
    const namePseudouEle = $('<p></p>').html(fullNameStr);
    fullNameEle.append(namePseudouEle);
    namePseudouEle.attr('style', 'display: none');
    inputNameEle.change(() => {
        namePseudouEle.html(inputNameEle.val());
    });


    const mathPointEle = $('<td></td>');
    const inputMathEle = $('<input>');
    mathPointEle.append(inputMathEle);
    //hidden textNode
    const mathPseudouEle = $('<p></p>');
    mathPointEle.append(mathPseudouEle);
    mathPseudouEle.attr('style', 'display: none');

    const physicsPointEle = $('<td>');
    const inputPhysicsEle = $('<input>');
    physicsPointEle.append(inputPhysicsEle);
    //hidden textNode
    const physicsPseudouEle = $('<p></p>');
    physicsPointEle.append(physicsPseudouEle);
    physicsPseudouEle.attr('style', 'display: none');

    const chemistryPointEle = $('<td>');
    const inputChemistryEle = $('<input>');
    chemistryPointEle.append(inputChemistryEle);
    //hidden textNode
    const chemistryPseudouEle = $('<p></p>');
    chemistryPointEle.append(chemistryPseudouEle);
    chemistryPseudouEle.attr('style', 'display: none');

    const averagePointEle = $('<td>');
    const inputAverageEle = $('<input>');
    inputAverageEle.attr('disabled', true)
    averagePointEle.append(inputAverageEle);
    //hidden textNode
    const averagePseudouEle = $('<p></p>');
    averagePointEle.append(averagePseudouEle);
    averagePseudouEle.attr('style', 'display: none');

    const categoryEle = $('<td>');
    const inputCategoryEle = $('<input>');
    inputCategoryEle.attr('disabled', true);
    categoryEle.append(inputCategoryEle);
    //hidden textNode
    const categoryPseudouEle = $('<p></p>');
    categoryEle.append(categoryPseudouEle);
    categoryPseudouEle.attr('style', 'display: none');

    rowElement.append(numIndexEle, fullNameEle, mathPointEle, physicsPointEle,
        chemistryPointEle, averagePointEle, categoryEle);
    bodyTable.append(rowElement);


    const calculatePoint = (mathPoint, physicsPoint, chemistryPoint) => {
        try {
            mathPoint = parseFloat(mathPoint);
            physicsPoint = parseFloat(physicsPoint);
            chemistryPoint = parseFloat(chemistryPoint);
            if (Number.isNaN(mathPoint) || Number.isNaN(physicsPoint) || Number.isNaN(chemistryPoint)) {
                throw new Error("NAN");
            }
            console.log(mathPoint, physicsPoint, chemistryPoint);
            let averagePoint = Math.round((mathPoint + physicsPoint + chemistryPoint) / 3 * 100) / 100;
            inputAverageEle.val(averagePoint);
            averagePseudouEle.html(averagePoint);
            let category = "";
            if (averagePoint >= 8.5) {
                category = "Giỏi";
            } else if (averagePoint >= 7) {
                category = "Khá";
            } else if (averagePoint >= 6) {
                category = "Trung Bình";
            } else {
                category = "Yếu";
            }
            inputCategoryEle.val(category);
            categoryPseudouEle.html(category);

        } catch (error) {
            console.log(error);
            console.log("done");
        }
    }


    function resetInvalidInput() {
        inputAverageEle.val("");
        averagePseudouEle.html("");
        inputCategoryEle.val("");
        categoryPseudouEle.html("");
    }

    inputMathEle.change(() => {
        let mathPoint = parseFloat(inputMathEle.val());
        if (isNaN(mathPoint) || mathPoint > 10 || mathPoint < 0) {
            mathPseudouEle.html("You has entered wrong input value. Please try again!");
            mathPseudouEle.attr('class', 'error-display');
            mathPseudouEle.attr('style', 'display: block;');
            return resetInvalidInput();
        }
        inputMathEle.val(mathPoint);
        let physicsPoint = inputPhysicsEle.val();
        let chemistryPoint = inputChemistryEle.val();
        // console.log(mathPoint, physicsPoint, chemistryPoint);
        mathPseudouEle.html(mathPoint);
        mathPseudouEle.attr('style', 'display: none');
        calculatePoint(mathPoint, physicsPoint, chemistryPoint);
    })
    inputPhysicsEle.change(() => {
        let mathPoint = inputMathEle.val();
        let physicsPoint = parseFloat(inputPhysicsEle.val());
        if (isNaN(physicsPoint) || physicsPoint > 10 || physicsPoint < 0) {
            physicsPseudouEle.html("You has entered wrong input value. Please try again!");
            physicsPseudouEle.attr('class', 'error-display');
            physicsPseudouEle.attr('style', 'display: block;');
            return resetInvalidInput();
        }
        inputPhysicsEle.val(physicsPoint);
        let chemistryPoint = inputChemistryEle.val();
        // console.log(mathPoint, physicsPoint, chemistryPoint);
        physicsPseudouEle.html(physicsPoint);
        physicsPseudouEle.attr('style', 'display: none');
        calculatePoint(mathPoint, physicsPoint, chemistryPoint);
    })
    inputChemistryEle.change(() => {
        let mathPoint = inputMathEle.val();
        let physicsPoint = inputPhysicsEle.val();
        let chemistryPoint = parseFloat(inputChemistryEle.val());
        if (isNaN(chemistryPoint) || chemistryPoint > 10 || chemistryPoint < 0) {
            chemistryPseudouEle.html("You has entered wrong input value. Please try again!");
            chemistryPseudouEle.attr('class', 'error-display');
            chemistryPseudouEle.attr('style', 'display: block;');
            return resetInvalidInput();
        }
        inputChemistryEle.val(chemistryPoint);
        // console.log(mathPoint, physicsPoint, chemistryPoint);
        chemistryPseudouEle.html(chemistryPoint);
        chemistryPseudouEle.attr('style', 'display: none');
        calculatePoint(mathPoint, physicsPoint, chemistryPoint);
    })
}

//reset handler
resetButtonEle.click(() => {
    const listRowEles = bodyTable.children();
    for (let rowIndex = 0; rowIndex < listRowEles.length; rowIndex++) {
        const rowEle = listRowEles.eq(rowIndex);
        // console.log(rowEle.childNodes.length);
        const nameEle = rowEle.children().eq(1);
        const inputNameEle = nameEle.children().eq(0);
        inputNameEle.val("");
        nameEle.children().eq(1).html("");

        const mathPointEle = rowEle.children().eq(2);
        const inputMathPointEle = mathPointEle.children().eq(0);
        inputMathPointEle.val("");
        mathPointEle.children().eq(1).html("");


        const physicsPointEle = rowEle.children().eq(3);
        const inputPhysicsPointEle = physicsPointEle.children().eq(0);
        inputPhysicsPointEle.val("");
        physicsPointEle.children().eq(1).html("");

        const chemistryPointEle = rowEle.children().eq(4);
        const inputChemistryPointEle = chemistryPointEle.children().eq(0);
        inputChemistryPointEle.val("");
        chemistryPointEle.children().eq(1).html("");


        const averagePointEle = rowEle.children().eq(5);
        const inputAveragePointEle = averagePointEle.children().eq(0);
        inputAveragePointEle.val("");
        averagePointEle.children().eq(1).html("");


        const categoryPointEle = rowEle.children().eq(6);
        const inputCategoryPointEle = categoryPointEle.children().eq(0);
        inputCategoryPointEle.val("");
        categoryPointEle.children().eq(1).html("");

    }
})

const tableStudent = $('#student-table');
const saveEle = $('#export-excel');
saveEle.click(() => {
    $("#student-table").table2excel({
        filename: "student_table.xls"
    });
});
