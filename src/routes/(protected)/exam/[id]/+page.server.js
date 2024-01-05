import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {

	// todo: Check if user is authenticated or not.
	if (!locals.user) {
		 throw redirect(303, '/login');
	}

	// todo: Check if user can take is enrolled in this exam.

	// todo: Load the exam

	return {
		user: {
			id: 1,
			uid: "pg53851",
			name: "Guilherme Sampaio",
			email: "pg53851@alunos.uminho.pt",
			role: "mstudent"
		},
		exam: {
			"id": 0,
			"version": 1,
			"reservation": "Reserva2",
			"duration": 90,
			"max_score": 100,
			"exam_type": "EXAM",
			"description": "Trying to create a Exam Example",
			"subject": "Sistemas Operativos",
			"questions": [
				{
					"id": 0,
					"question_type": "MULTIPLE_CHOICE",
					"points": 25.0,
					"image_path": "http://www.g20brasil.com.br/wp-content/uploads/2017/08/G20Brasil_como_instalar_o_interruptor_paralelo_3_way_02.jpg",
					"description": "Qual dos YouTubers OG's é melhor ? Selecione apenas uma resposta!\n A imagem não tem nada a ver.",
					"answer": {
						"O Fer0m0nas e o melhor deles todos! Ninguem diz o contrario!": true,
						"O VenomExtreme fell off...": false,
						"O J4rvas e a sua gameplay de Team Fortress 2": true,
						"O Tiagovksi? Nem devia estar aqui!": false
					}
				},
				{
					"id": 1,
					"question_type": "MULTIPLE_CHOICE",
					"points": 25.0,
					"image_path": "No source",
					"description": "Este é uma questão de escolha múltipla 1",
					"answer": {
						"0": true,
						"1": false,
						"2": true,
						"3": false
					}
				},
				{
					"id": 2,
					"question_type": "MULTIPLE_CHOICE",
					"points": 25.0,
					"image_path": "https://getwallpapers.com/wallpaper/full/f/8/d/1284031-large-wallpapers-1920x1140-ipad.jpg",
					"description": "Este é uma questão de escolha múltipla 2",
					"answer": {
						"0": true,
						"1": false,
						"2": true,
						"3": false
					}
				},
				{
					"id": 3,
					"question_type": "MULTIPLE_CHOICE",
					"points": 25.0,
					"image_path": "No source",
					"description": "Este é uma questão de escolha múltipla 3",
					"answer": {
						"0": true,
						"1": false,
						"2": true,
						"3": false
					}
				}
			]
		}
	};

};