import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemShopService implements InMemoryDbService {
    createDb() {
        const images = [
            {
                'id': 1,
                'url': 'https://source.unsplash.com/collection/625771/1200x350?sig=1',
                'title': 'image 1'
            },
            {
                'id': 2,
                'url': 'https://source.unsplash.com/collection/625771/1200x350?sig=2',
                'title': 'image 2'
            },
            {
                'id': 3,
                'url': 'https://source.unsplash.com/collection/625771/1200x350?sig=3',
                'title': 'image 3'
            }
        ];

        const games = [
            {
                'id': 1,
                'title': 'Bitcher 3 - Game of the year edition',
                'description': 'Ever miss that feeling that everybody is a wining little bitch? This game will make it possible. We\'ve implemented an AI that will constantly start wining about the most insignificant stuff. The challenge is to not kill the AI.',
                'price': 50,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=1',
                'rating': 3,
                'featured': true
            },
            {
                'id': 2,
                'title': 'Soul crusher - The mommy edition',
                'description': 'It\'s midnight, you hear strange voices. They are telling you just how disappointed they are in you. You find out that your mother has found a way to go back in time and prevent you from ever been born. Your goal is to prevent her from failing.',
                'price': 40,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=2',
                'rating': 5,
                'featured': true
            },
            {
                'id': 3,
                'title': 'Mood Raider - Life in pieces',
                'description': 'A real-time, true to life, game where you get to experience life\'s darkest moments. There are surprises lurking behind every corner. And when you least expect it, you will get beaten down. It a fun game for the entire family.',
                'price': 20,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=3',
                'rating': 2,
                'featured': false
            },
            {
                'id': 4,
                'title': 'Angry turds',
                'description': 'Try to evade the constant crap that it\'s falling from the sky. This new spin on space invaders mixed with angry birds garantees hours of fun. It the best way to escape the shitty reality that is called your life.',
                'price': 3.5,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=4',
                'rating': 4,
                'featured': true
            },
            {
                'id': 5,
                'title': 'Call of booty',
                'description': 'It\'s late at night. You have had one to many drinks. Suddenly you realise you\'re all alone and even the cat doesn\'t like you. All your efforts on Tinder have resulted in restraining orders because some people just don\'t appriciate a good old stalking. So your mission is to convince people you\'re not a creep and go on a date with you.',
                'price': 10,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=5',
                'rating': 1,
                'featured': false
            },
            {
                'id': 6,
                'title': 'Poke-A-Mom',
                'description': 'You\'re mind is the size of a wallnut and you are into you\'re best friend\'s mother. So you take you\'re ball and go up town to hunt this forbidden fruit. Gotta catch \'em all.',
                'price': 30,
                'image': 'https://source.unsplash.com/collection/2348098/700x400?sig=6',
                'rating': 2,
                'featured': false
            }
        ];

        const customers = [
            { id: 1, userName: 'guest'}
        ];

        const members = [
            { id: 1, firstName: 'Balder', lastName: 'Karlsrud', jobTitel: 'CEO', picture: 'https://randomuser.me/api/portraits/men/29.jpg'},
            { id: 2, firstName: 'Aleksi', lastName: 'Seppanen', jobTitel: 'CFO', picture: 'https://randomuser.me/api/portraits/men/58.jpg'},
            { id: 3, firstName: 'Arian', lastName: 'Schenk', jobTitel: 'CTO', picture: 'https://randomuser.me/api/portraits/men/10.jpg'},
            { id: 4, firstName: 'Emilia', lastName: 'Campos', jobTitel: 'Developer', picture: 'https://randomuser.me/api/portraits/women/45.jpg'},
            { id: 5, firstName: 'Páris', lastName: 'Freitas', jobTitel: 'Designer', picture: 'https://randomuser.me/api/portraits/women/20.jpg'},
            { id: 6, firstName: 'Rick', lastName: 'Kennedy', jobTitel: 'Analyst', picture: 'https://randomuser.me/api/portraits/men/63.jpg'},
        ];

        const orders = [];

        return { images, games, customers, orders, members };
    }
}
