
<script>
import { onMount } from 'svelte';
import Exam from '$lib/components/exam/Exam.svelte';

let exam;
let sAnswers;

const provaId = "1"; //page.params.id;
const jwt = 'your_jwt'; // Replace with actual jwt

onMount(async () => {
    try {
        console.log("Prova id" + provaId?.toString());

        // Hardcoded exam data for testing

        const studentAnswers={"responses_data": [
        {"question_id": 1, "response_data": {"0": true, "1": true, "2": false, "3": false}},
        {"question_id": 2, "response_data": {"3": true, "2": true, "2+0": false, "4-3": false }},
        {"question_id": 3, "response_data": "Não sei nada"},
        {"question_id": 4, "response_data": {"0": "perguntas", "1": "espaços"}}
        ]};

        const examData = {
            "exam": {
                "version": 3,
                "reservation": "1",
                "duration": 90,
                "maxClassification": 200,
                "type": "",
                "description": "Bem Vindo ao Teste de Matemática",
                "subject": "Math",
                "questions": [
                    {
                        "questionId": 1,
                        "type": "T/F",
                        "points": 50.0,
                        "imagePath": "https://cdn.sabado.pt/images/2020-03/img_640x426$2020_03_02_12_45_27_621141.jpg",
                        "description": "How much is 1+1?",
                        "answers": { "3": false, "2": true, "2+0": true, "4-3": false }
                    },
                    {
                        "questionId": 2,
                        "type": "Multiple",
                        "points": 50.0,
                        "imagePath": "https://pm1.aminoapps.com/6487/2c3baf11a510c9eeab42aef4e05d5ef9319c9fb1_hq.jpg",
                        "description": "How can we achieve the result 2?",
                        "answers": { "3": false, "2": true, "2+0": true, "4-3": false }
                    },
                    {
                        "questionId": 3,
                        "type": "Open",
                        "points": 50.0,
                        "imagePath": "https://i0.wp.com/bantumen-mediaserver1.s3.eu-north-1.amazonaws.com/wp-content/uploads/2020/07/13224353/PI-1-1.jpg?fit=2500%2C1667&ssl=1",
                        "description": "O que quer dizer 1+1?",
                        "answer": "1+1 quer dizer 2",
                        "minWords": 100,
                        "maxWords": 500
                    },
                    {
                        "questionId": 4,
                        "type": "Spaces",
                        "points": 50.0,
                        "imagePath": "https://pbs.twimg.com/profile_images/951109347492483074/elRxCnaZ_400x400.jpg",
                        "description": "1+1 é igual a {-0-} dando um número de unidade {-1-}",
                        "answers": { "0": "2", "1": "inteira" }
                    }
                ]
            }
        };

        exam = examData.exam;
        sAnswers = studentAnswers.responses_data;
    } catch (error) {
        console.error('Error fetching exam data', error);
    }
});
</script>

{#if exam}
    <!-- pass the mode so i can reuse the components -->
    <Exam {exam} mode="view" studentAnswers={sAnswers}/>
{:else}
<p>Loading...</p>
{/if}

<style>

</style>
