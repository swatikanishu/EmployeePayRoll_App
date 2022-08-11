window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    
    const HeaderHtml = "<tr><th>Profile</th><th>Name</th><th>Gender</th><th>Department</th>"+
    "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>";
    const innerHtml = `${HeaderHtml}
            <tr>
                <td><img class="profile" alt="" src="/asset/profile_img-3.png">
                </td>
                <td>Swatika Singh</td>
                <td>Female</td>
                <td>
                    <div class='dept-label'>HR</div>
                    <div class='dept-label'>Finance</div>
                </td>
                <td>4000000</td>
                <td>8 August 2022</td>
                <td>
                    <img id="1" onclick="remove(this)" alt="delete" src="/asset/delete-black-18dp.svg">
                    <img id="1" alt="edit" onclick="update(this)" src="/asset/create-black-18dp.svg">
                </td>
            </tr>
            `;
    document.querySelector('#display').innerHTML = innerHtml;
}