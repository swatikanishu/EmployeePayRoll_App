let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

const createInnerHtml = () => {
    
    const headerHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>" +
        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    // let empPayrollList = createEmployeePayrollJSON();
    if (empPayrollList.length == 0)
        return;
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePicture}">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                   <img id="${empPayrollData._id}" onclick="remove(this)"
                   src="/asset/delete-black-18dp.svg" alt="delete">
                   <img id="${empPayrollData._id}" onclick="update(this)"
                   src="/asset/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    if (deptList){
    for (let dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`;
    }
}
    return deptHtml;
};

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
   if(!empPayrollData) return;
    const index = empPayrollList 
                    .map(empData => empData._id)
                    .indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem('EmployeePayrollList', JSON.stringify(empPayrollList));
    document.querySelector('.emp-count').textContent = empPayrollList.length;
    createInnerHtml();
}

const update = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
    if(!empPayrollData) return;
    localStorage.setItem('editEmp',JSON.stringify(empPayrollData))
    window.location.replace(site_properties.add_emp_payroll_page);
}