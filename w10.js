
$(document).ready(function () {
    const nameInput = $("#name");
    const motorcycleInput = $("#motorcycle");
    const experienceInput = $("#experience");
    const memberTableBody = $("#memberTableBody");

    $("#memberForm").submit(function (e) {
        e.preventDefault();

        const name = nameInput.val();
        const motorcycle = motorcycleInput.val();
        const experience = experienceInput.val();

        // Create a new row for the table
        const newRow = `<tr>
            <td>${name}</td>
            <td>${motorcycle}</td>
            <td>${experience}</td>
        </tr>`;

        // Append the new row to the table body
        memberTableBody.append(newRow);

        // Clear input fields
        nameInput.val("");
        motorcycleInput.val("");
        experienceInput.val("");
    });
});
