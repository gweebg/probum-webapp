import { redirect } from '@sveltejs/kit';


const loadExams = async () => {
	return [
		{
			id: 1,
			uc: "Sistemas Operativos",
			start_at: "2023-12-29T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Sistemas Distribuidos",
			start_at: "2024-02-14T14:00:00",
			duration: "1:30",
			question_amount: 20,
			scored_to: 10,
			version: 1,
			description: "First exam for the class of Sistemas Distribuidos.",
			location: {
				building: "CP7",
				room: "1.03"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Cálculo de Programas",
			start_at: "2024-03-20T14:00:00",
			duration: "2:30",
			question_amount: 10,
			scored_to: 20,
			version: 2,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP2",
				room: "0.05"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Arquitetura de Computadores",
			start_at: "2023-12-20T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Arquitetura de Computadores",
			start_at: "2023-12-02T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Arquitetura de Computadores",
			start_at: "2024-02-13T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Engenharia de Sistemas em Redes",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Física Moderna",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Comunicação por Computador",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Laboratórios de Informática IV",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Laboratórios de Informática IV",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},
		{
			id: 1,
			uc: "Laboratórios de Informática IV",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		},{
			id: 1,
			uc: "Laboratórios de Informática IV",
			start_at: "2024-01-28T14:00:00",
			duration: "2:00",
			question_amount: 10,
			scored_to: 20,
			version: 1,
			description: "First exam for the class of Sistemas Operativos.",
			location: {
				building: "CP1",
				room: "1.02"
			},
			type: "Exam"
		}
	]
}

export const load = async ({ locals }) => {

	if (!locals.user) {
		throw redirect(303, '/login');
	}

	return {
		user: {
			id: 1,
			uid: "pg53851",
			name: "Guilherme Sampaio",
			email: "pg53851@alunos.uminho.pt",
			role: "mstudent"
		},
		exams: await loadExams()
	};

};