import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        data: [
            {
                name: 'Тимофеев Макар Никитич',
                prof: 'Врач-терапевт, врач-кардиолог, КМН',
                adress: '/images/doc1.jpg',
            },
            {
                name: 'Петрова София Арсентьевна',
                prof: 'Врач-терапевт, врач-кардиолог, КМН',
                adress: '/images/doc2.jpg',
            },
            {
                name: 'Ковалев Артём Тимофеевич',
                prof: 'Врач-терапевт, врач-кардиолог, КМН',
                adress: '/images/doc3.jpg',
            },
            {
                name: 'Смирнов Пётр Савельевич',
                prof: 'Врач-терапевт, врач-кардиолог, КМН',
                adress: '/images/doc4.jpg',
            }
        ]
    }),
});
