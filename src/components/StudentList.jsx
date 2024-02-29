// src/components/StudentList.jsx

function StudentList() {
  const students = ["Marc", "Lucy", "Anna"];

  return (
    <div className="list">
      <h2>Student List</h2>

      {students.map((name, i) => {
        return <p key={i}> {name} </p>;
      })}
    </div>
  );
}

export default StudentList;
