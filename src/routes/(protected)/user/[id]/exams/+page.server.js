import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {

	//if (!locals.user) {
	//	throw redirect(303, '/login');
	//}

	return {
		user: {
			id: 1,
			uid: "pg53851",
			name: "Guilherme Sampaio",
			email: "pg53851@alunos.uminho.pt",
			role: "mstudent"
		},

		exams: [
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2022-12-30T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			},
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2023-12-30T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			},
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2023-12-28T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			},
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2023-12-28T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			},
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2023-12-28T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			},
			{
				id: 1,
				uc: "Sistemas Operativos",
				start_at: "2023-12-28T14:00:00",
				duration: "2:00",
				question_amount: 10,
				scored_to: 20,
				version: 1,
				description: "First exam for the class of Sistemas Operativos.",
				location: {
					building: "CP1",
					room: "1.02"
				}
			}
		]
	};

};