export default class BookstoreService {
    getBooks() {
        return [
            {
                id: 1,
                title: 'Production-Ready Microservices',
                author: 'Susan Fowler'
            },
            {
                id: 2,
                title: 'Release it!',
                author: 'Michael T.Nygard'
            }
        ];
    }

}