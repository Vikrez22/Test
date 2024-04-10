let SHEET_ID = '10VIJpQ2mKecDE6A49lvsHRhO6zcK7Kwqs-MwB-ABCkc';
let SHEET_TITLE = 'ResponseSheet';
let SHEET_RANGE = 'A1:C';

// Define the CORS proxy URL
const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';

let FULL_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=${SHEET_TITLE}&range=${SHEET_RANGE}`;

fetch(CORS_PROXY_URL + FULL_URL) // Prepend the URL with the CORS proxy URL
.then(response => response.text())
.then(text => {
  // Extract JSON from the response text
  let jsonString = text.match(/(?<=google\.visualization\.Query\.setResponse\()\[.*\](?=\);)/s)[0];
  let data = JSON.parse(jsonString);

    let coursesContainer = document.getElementById('courses-container');
    let coursesData = data.table.rows;

    coursesData.forEach(course => {
        let courseInfo = JSON.parse(course.c[1].v);
        let courseThumbnail = courseInfo.image_receipt;
        let courseTitle = courseInfo.description;
        let courseDescription = courseInfo.notes;
        let pdfLink = courseInfo.pdf_receipt;

        let courseElement = document.createElement('div');
        courseElement.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
        courseElement.innerHTML = `
            <div class="education_block_grid style_2">
                <div class="education_block_thumb n-shadow">
                    <img src="${courseThumbnail}" class="img-fluid" alt="${courseTitle}">
                </div>

                <div class="education_block_body">
                    <h4 class="bl-title">${courseTitle}</h4>
                    <p>${courseDescription}</p>
                </div>

                <div class="cources_info">
                    <div class="cources_info_first">
                        <ul>
                            <li><a href="${pdfLink}" class="btn bg-red" target="_blank">Download Pdf</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        coursesContainer.appendChild(courseElement);
    });
})
.catch(error => {
    console.error('Error fetching courses:', error);
});
