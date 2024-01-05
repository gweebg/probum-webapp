import {redirect} from "@sveltejs/kit";

export const load = async ({ locals }) => {

    if (!locals.user) {
        throw redirect(303, '/login');
    }

    return {
        exam: {
            version: 1,
            reservation: "the-reservation-id",
            duration: 120,
            max_score: 20,
            exam_type: "EXAM",
            description: "Isto é um exame que foi realizado há duas semanas!",
            subject: "Sistemas Distribuidos",
            questions: [
                {
                    id: 0,
                    question_type: "MULTIPLE_CHOICE",
                    points: 20,
                    image_path: "No source",
                    description: "Is this an example question ?",
                    answer: {
                        "Well, I don't think so..": false,
                        "I don't know!": false,
                        "Looks like one!": true
                    }
                },
            ]
        },
        status: {
            exam_score: 10,
            question_score: {0: 10},
            answers: [
                {
                    question_id: 0,
                    response_data:{
                        "Well, I don't think so..": false,
                        "I don't know!": false,
                        "Looks like one!": true
                    }
                }
            ]
        }
    };

};