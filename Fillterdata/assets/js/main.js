var courseList = document.querySelectorAll('.course');
var containerFood = document.querySelectorAll('.container__food');
var btnList = document.querySelectorAll('button');

// Cách 1
btnList.forEach(btn => {
    btn.addEventListener('click', e => {
        let type = e.currentTarget.getAttribute('type');
        courseList.forEach(course => {
            let foodType = course.getAttribute('type');

            if (type == 'all' || foodType == type) {
                course.classList.remove('hide');
            } else {
                course.classList.add('hide');
            }
        })
    });
});