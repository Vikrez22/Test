async function fetchCourses() {
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbzC_tsSfU7bkBZ4-qq-azRiMeU4OfFo4bJZ5HsX5Yi14jv4X5zix5y8YJll_VPNM0XY/exec', {  
      method: 'GET',
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: "follow",
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const courses = await response.json();
    displayCourses(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
  }
}



function displayCourses(courses) {
    var courseSection = document.getElementById('course-section');
    courseSection.innerHTML = ''; // Clear previous content

    courses.forEach(function(course) {
        var courseDiv = document.createElement('div');
        courseDiv.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        var htmlContent = `
            <div class="education_block_grid style_2">
                <div class="education_block_thumb n-shadow">
                    <a href="${course.link}">
                        <img src="${course.imageUrl}" class="img-fluid" alt="${course.title}">
                    </a>
                </div>
                <div class="education_block_body">
                    <h4 class="bl-title">
                        <a href="${course.link}">${course.title}</a>
                    </h4>
                </div>
                <div class="cources_info">
                    <div class="cources_info_first">
                        <ul>
                            <li><a href="${course.pdfUrl}" class="btn bg-red" download>Download Pdf</a></li>
                        </ul>
                    </div>
                    <div class="cources_info_last">
                        <h3>${course.price}</h3>
                    </div>
                </div>
            </div>`;

        courseDiv.innerHTML = htmlContent;
        courseSection.appendChild(courseDiv);
    });
}

window.onload = function() {
    fetchCourses();
};