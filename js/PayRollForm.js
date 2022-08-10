window.addEventListener('DOMContentLoaded', (event) => {
  //validateDate();
  validatename();
  SalaryScrollBar();

});
function SalaryScrollBar() {
  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  output.textContent = salary.value;
  salary.addEventListener('input', function () {
      output.textContent = salary.value;
  });
}
function validatename() {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.text-error');
  name.addEventListener('input', function () {
      if (name.value.length == 0) {
          textError.textContent = "";
          return;
      }
      try {
          (new EmployeePayroll()).name = name.value;
          textError.textContent = "";
      } catch (e) {
          textError.textContent = e;
      }
  });
}


const save = () => {
  try {
      let employeePayrollData = createEmployeePayroll();
      createAndUpdateStorage(employeePayrollData);
      alert("added sucessfully");
  } catch (e) {
      return;
  }
}
function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  if (employeePayrollList != undefined) {
      employeePayrollList.push(employeePayrollData);
  } else {
      employeePayrollList = [employeePayrollData]
  }
  // alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList))
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayroll();

  try {
      employeePayrollData.name = getInputValueById('#name');
  } catch (e) {
      setTextValue('.text-error', e);
      throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = getInputValueById('#salary');
  employeePayrollData.note = getInputValueById('#notes');
  let date = getInputValueById('#day') + " " + getInputValueById('#month') + " " + getInputValueById('#year');
  // alert(date);
  employeePayrollData.startDate = date;
   // alert(employeePayrollData.toString());
  return employeePayrollData;
}
const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
      if (item.checked) selItems.push(item.value);
  });
  return selItems;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const getInputElementValue = (id) => {
  let value = document.getElementById(id).value;
  return value;
}

const resetForm = () => {
  setValue('#name', '');
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]'); unsetSelectedValues('[name=department]');
  setValue('#salary', '');
  setTextValue('.salary-output','400000') 
  setValue('#notes', '');
  setValue('#day', '');
  setValue('#month', '');
  setValue('#year', '');
}