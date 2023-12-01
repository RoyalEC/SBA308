//SBA 308 Assignment

const courseInfo = {
    id: 101,
    name: "Introduction to Programming",
};

const assignmentGroup = [ {
    id: 201,
    name: "Programming Assignments",
    course_id: 101,
    group_weight: 50,
    assignments: [{
        id: 301,
        name: "Assignment 1",
        due_at: '2023-05-01',
        points_possible: 100,
    },{
        id: 302,
        name: "Assignment 2",
        due_at: "2023-05-02",
        points_possible: 200,

    },{
        id: 303,
        name: "Assignment 3",
        due_at: "2023-05-03",
        points_possible: 300,
    }]
}]

    

const learnerSubmissions = [{
    learner_id: 501,
    assignment_id: 301,
    submission:{
        submitted_at: "2023-04-30",
        score: 85,
    }
    },{
        learner_id: 502,
        assignment_id: 302,
        submission:{
            submitted_at: "2023-4-30",
            score: 90,
        }},
         {
        learner_id: 503,
        assignment_id: 303
        submission:{
            submitted_at: "2023-4-30",
            score: 95,
        }},
        
    }]

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions){
    try { 
        if (assignmentGroup.course_id !== courseInfo.id){
            throw new Error("Course ID mismatch.")
        }
        const results = [];
        for (const submission of learnerSubmissions){
            let assignment = assignmentGroup.assignment.find(a => a.id === submission.assignment.id);
            if (!assignment) continue;
        }
        
    } catch (error) {
        
    }
}