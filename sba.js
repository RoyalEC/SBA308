//SBA 308 Assignment

const courseInfo = {
  id: 101,
  name: "Introduction to Programming",
};

const assignmentGroup = [
  {
    id: 201,
    name: "Programming Assignments",
    course_id: 101,
    group_weight: 50,
    assignments: [
      {
        id: 301,
        name: "Assignment 1",
        due_at: "2023-05-01",
        points_possible: 100,
      },
      {
        id: 302,
        name: "Assignment 2",
        due_at: "2023-05-02",
        points_possible: 200,
      },
      {
        id: 303,
        name: "Assignment 3",
        due_at: "2023-05-03",
        points_possible: 300,
      },
    ],
  },
];

const learnerSubmissions = [
  {
    learner_id: 501,
    assignment_id: 301,
    submission: {
      submitted_at: "2023-04-30",
      score: 85,
    },
  },
  {
    learner_id: 502,
    assignment_id: 302,
    submission: {
      submitted_at: "2023-4-30",
      score: 90,
    },
  },
  {
    learner_id: 503,
    assignment_id: 303,
    submission: {
      submitted_at: "2023-4-30",
      score: 95,
    },
  },
];

function getLearnerData(courseInfo, assignmentGroups, learnerSubmissions) {
  try {
    const results = [];

    learnerSubmissions.forEach((submission) => {
      assignmentGroups.forEach((group) => {
        if (group.course_id !== courseInfo.id) {
          throw new Error("Course ID mismatch.");
        }

        const assignment = group.assignments.find(
          (a) => a.id === submission.assignment_id
        );

        if (!assignment) return;
        const dueDate = new Date(assignment.due_at);
        if (new Date() < dueDate) return;

        let scorePercentage =
          (submission.submission.score / assignment.points_possible) * 100;
        if (new Date(submission.submission.submitted_at) > dueDate) {
          scorePercentage -= 10; // Deduct 10% for late submission
        }

        let learnerResult = results.find((r) => r.id === submission.learner_id);
        if (!learnerResult) {
          learnerResult = { id: submission.learner_id, avg: 0 };
          results.push(learnerResult);
        }

        learnerResult[submission.assignment_id] = scorePercentage;
      });
    });

    results.forEach((result) => {
      let totalScore = 0,
        totalWeight = 0;
      assignmentGroups.forEach((group) => {
        group.assignments.forEach((assignment) => {
          if (assignment.id in result) {
            totalScore += result[assignment.id] * group.group_weight;
            totalWeight += group.group_weight;
          }
        });
      });
      result.avg = totalWeight > 0 ? totalScore / totalWeight : 0;
    });

    return results;
  } catch (error) {
    console.error(error.message);
    // Handle or return error appropriately
  }
}

console.log(getLearnerData(courseInfo, assignmentGroup, learnerSubmissions));
