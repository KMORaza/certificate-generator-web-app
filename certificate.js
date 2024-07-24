document.addEventListener('DOMContentLoaded', function() {
    var downloadContainer = document.getElementById('downloadContainer');
    downloadContainer.style.display = 'none';
    document.getElementById('certificateForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var course = document.getElementById('course').value;
        var date = document.getElementById('date').value;
        document.getElementById('certificateName').textContent = name;
        document.getElementById('certificateCourse').textContent = course;
        document.getElementById('certificateDate').textContent = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
        var certificateSection = document.getElementById('certificate');
        certificateSection.style.display = 'block';
        downloadContainer.style.display = 'block';
    });
    document.getElementById('downloadPNG').addEventListener('click', function() {
        html2canvas(document.getElementById('certificate')).then(function(canvas) {
            var img = canvas.toDataURL('image/png');
            var link = document.createElement('a');
            link.href = img;
            link.download = 'certificate.png';
            link.click();
        });
    });
    document.getElementById('downloadJPG').addEventListener('click', function() {
        html2canvas(document.getElementById('certificate')).then(function(canvas) {
            var img = canvas.toDataURL('image/jpeg');
            var link = document.createElement('a');
            link.href = img;
            link.download = 'certificate.jpg';
            link.click();
        });
    });
});
