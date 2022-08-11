window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    
    const headerHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
            <tr>
                <td><img class="profile" alt="" src="${empPayrollData._profilePic}">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>${getDeptHtml(empPayrollData._department)}</td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
    
                    <img id="1" onclick="remove(this)" alt="delete" src="/asset/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/asset/create-black-18dp.svg">
                </td>
            </tr>
            `};
    document.querySelector('#display').innerHTML = innerHtml;
}
createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Swatika Singh',
            _gender: 'Female',
            _department: [
                'Sales',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '1 July 2022',
            _notes: 'Test1',
            _profilePic: '/asset/profile_img-3.png'
        },
        {
            _name: 'Saurabh Singh',
            _gender: 'Male',
            _department: [
                'Sales'
            ],
            _salary: '300000',
            _startDate: '10 November 2022',
            _notes: 'Test1',
            _profilePic: '/asset/profile_img-2.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}