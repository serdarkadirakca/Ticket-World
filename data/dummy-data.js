const Category = require("../models/category");
const Product = require("../models/product");
const slugField = require("../helpers/slugfield");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

const Ses = require("../models/ses");
const Title = require("../models/title");
const ProductUsers = require("../models/productusers");


async function populate() {
    const count = await Category.count();

        const categories = await Category.bulkCreate([
            { name: "Home",url: slugField("Home"), },
            { name: "Concert",url: slugField("Concert"), },
            { name: "Cinema",url: slugField("Cinema"), },
            { name: "Theatre",url: slugField("Theatre"), },
            { name: "Musical",url: slugField("Musical"), },
            { name: "Other Performing Arts",url: slugField("Other Performing Arts"), }
        ]);
        
        const ses = await Ses.bulkCreate([
            { name: "09:30",url: "09-30"},
            { name: "10:30",url: "10-30"},
            { name: "11:30",url: "11-30"},
            { name: "12:30",url: "12-30"},
            { name: "13:30",url: "13-30"},
            { name: "14:30",url: "14-30"},
            { name: "15:30",url: "15-30"},
            { name: "16:30",url: "16-30"},
            { name: "17:30",url: "17-30"}

        ]);

        const titles = await Title.bulkCreate([
            {name: "Popular Events"},
            {name: "Concert"},
            {name: "Cinema"},
            {name: "Theatre"},
            {name: "Musical"},
            {name: "Other Performing Arts"}
        ]);
    
        const users = await User.bulkCreate([
            {
                name:"Ahmet",
                surname:"Yılmaz",
                address:"Acıbadem, Uskudar, No:24b" ,
                city:"Istanbul" ,
                country:"Turkey" ,
                postcode:"34670" ,
                phone: "05323423234",
                email:"ahmet.yilmaz0096@hotmail.com" , 
                password: await bcrypt.hash("ahmet123", 10)
            }
        ]);

        const products = await Product.bulkCreate([
            {
                title: "Hidra",
                description:"Hidra, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"1a.jpg",
                imagehover:"1b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("Hidra"),
                time: "10/12/2023 - 19:00"
            },
            {
                title: "İkilem",
                description:"İkilem, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"2a.jpg",
                imagehover:"2b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("İkilem"),
                time: "17/12/2023 - 22:00"
            },
            {
                title: "Birileri",
                description:"Birileri, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"3a.jpg",
                imagehover:"3b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("Birileri"),
                time: "23/12/2023 - 20:00"
            },
            {
                title: "Can Ozan",
                description:"Can Ozan, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"4a.jpg",
                imagehover:"4b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("Can Ozan"),
                time: "24/12/2023 - 20:00"
            },
            {
                title: "Daniska",
                description:"Daniska, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"5a.jpg",
                imagehover:"5b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıkoy Sahne",
                url: slugField("Daniska"),
                time: "16/12/2023 - 22:00"
            },
            {
                title: "Bulutsuzluk Ozlemi",
                description:"Bulutsuzluk Ozlemi, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"6a.jpg",
                imagehover:"6b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıkoy Sahne",
                url: slugField("Bulutsuzluk Ozlemi"),
                time: "31/12/2023 - 19:00"
            },
            {
                title: "Hayki",
                description:"Hayki, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"7a.jpg",
                imagehover:"7b.jpg",
                price:"225",
                status:"In Stock",
                place:"Hayal Kahvesi Atakent",
                url: slugField("Hayki"),
                time: "31/12/2023 - 21:00"
            },
            {
                title: "Mavi Gri",
                description:"Mavi Gri, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"8a.jpg",
                imagehover:"8b.jpg",
                price:"225",
                status:"In Stock",
                place:"Hayal Kahvesi Aqua Florya",
                url: slugField("Mavi Gri"),
                time: "24/12/2023 - 21:00"
            },
            {
                title: "Şanışer",
                description:"Şanışer, whose music has made in recent years has been loved by many people and has a wide fan base, meets with fans.",
                image:"9a.jpg",
                imagehover:"9b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("Şanışer"),
                time: "10/12/2023 - 21:00"
            },
            {
                title: "Duman",
                description:"Duman, whose music many years has been loved by many people and has a wide fan base, is meeting with fans.",
                image:"10a.jpg",
                imagehover:"10b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kadıköy DorockXL",
                url: slugField("Duman"),
                time: "17/12/2023 - 19:00"
            },
            {
                title: "Mabel Matiz",
                description:"Mabel Matiz, whose music many years has been loved by many people and has a wide fan base, is meeting with fans.",
                image:"11a.jpg",
                imagehover:"11b.jpg",
                price:"225",
                status:"In Stock",
                place:"Volkswagen Arena",
                url: slugField("Mabel Matiz"),
                time: "16/12/2023 - 21:00"
            },
            {
                title: "Sagopa Kajmer",
                description:"Sagopa Kajmer, whose music many years has been loved by many people and has a wide fan base, is meeting with fans.",
                image:"12a.jpg",
                imagehover:"12b.jpg",
                price:"225",
                status:"In Stock",
                place:"Bostancı Gösteri Merkezi",
                url: slugField("Sagopa Kajmer"),
                time: "16/12/2023 - 21:00"
            },
            {
                title: "Mor ve Otesi",
                description:"Mor ve Otesi, whose music many years has been loved by many people and has a wide fan base, is meeting with fans.",
                image:"13a.jpg",
                imagehover:"13b.jpg",
                price:"225",
                status:"In Stock",
                place:"Volkswagen Arena",
                url: slugField("Mor ve Otesi"),
                time: "10/12/2023 - 22:00"
            },
            {
                title: "Seksendort",
                description:"Seksendort, whose music many years has been loved by many people and has a wide fan base, is meeting with fans.",
                image:"14a.jpg",
                imagehover:"14b.jpg",
                price:"225",
                status:"In Stock",
                place:"Volkswagen Arena",
                url: slugField("Seksendort"),
                time: "24/12/2023 - 19:00"
            },
            {
                title: "Alice",
                description: "A family musical Alice is very bored with the tea parties that are often given in the garden of their house and the guests who attend these invitations. For him, everything is colorless and uniform. He is always dreaming of a colorful and fantastic world where impossible things happen. One day, again during a tea party, he finds himself in wonderland by chasing a white rabbit. In his fight against the evil Red Queen, he is helped by a talking cat, a mad hatter, a March hare, a musketeer mouse, a white rabbit and many other fantastic characters. In wonderland, he encounters incredible events, unsolved riddles, incomprehensible word games. Everything that happened is just a dream that Alice had.",
                image: "15a.jpg",
                imagehover:"15b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Alice"),
                time: "23/12/2023 - 20:00"
                },
                
                {
                title: "Yaşar Ne Yaşar Ne Yaşamaz",
                description: "Metin Zakoğlu is here with the Yaşar Ne Yaşar Ne Yaşar Ne Yaşar Ne Yaşar Ne Yaşamazarı game, which he wrote, directed and played... Aziz Nesin don't Live LIVE Live What WHAT wonderful work by introducing a brand new interpretation of the famous player Zakoglu and interactive Text. No one has ever brought the play Yaşar Ne Yaşar Ne Yaşarmaz, which Metin Zakoğlu put on the stage with a rational method, to the stage with only one person and with such an interpretation until today. Let's find out if the audience is a spectator, an actor, actors are actors, prisoners or themselves by watching it all together. If you are ready to be a part of the game, don't miss this funny comedy!",
                image: "16a.jpg",
                imagehover:"16b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul Anadolu - Cafe Theatre",
                url: slugField("Yaşar Ne Yaşar Ne Yaşamaz"),
                time: "31/12/2023 - 20:00"
                },
                
                {
                title: "Kanlı Nigar",
                description: "It tells the sad, funny, musical and dancing adventure of Kanlı Nigar, one of the most important figures of our traditional Turkish Theater. Kanlı Nigar, a 2-act play written by Sadık Şendil, contains many elements of Traditional Turkish Theater and sends a salute to the old masters of our Theater. In the game, in which the idea that kaini fendi beat the man is brought to the fore with a dramatic processing, Nigar is a woman who has borne every burden of life in the heaviest way. But in the end, life also teaches him to carry. bloody Nigar, which lasts for 2 hours and 40 minutes, is one of the rare works that have come in the simplest form to this day.",
                image: "17a.jpg",
                imagehover:"17b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Kartal Sanat Tiyatro Salonu",
                url: slugField("Kanlı Nigar"),
                time: "09/12/2023 - 16:00"
                },
                
                {
                title: "Tobi ve Çıt Çıt Terzi",
                description: "Tobi, his grandfather helps the dressmaker with the leftovers from school.His biggest dream is to become both a tailor and a prince when he grows up.But not liking the vegetables and fruits that he should eat while growing up will cause him to experience unexpected results. The mouse enters the store for the vegetables he is storing, resulting in Lady Tassel, Lady Lens, Lady Bead and Lady Pomp, who ordered costumes for the Royal ball, not being able to get the costumes. Tobi understands the mistake he made. We are waiting for this adventure accompanied by dances and songs.",
                image: "18a.jpg",
                imagehover:"18b.jpg",
                price:"225",
                status:"In Stock",
                place:"Ankara - Çankaya Sahne",
                url: slugField("Tobi ve Çıt Çıt Terzi"),
                time: "10/12/2023 - 21:00"
                },
                
                {
                title: "Çizmeli Kedi",
                description: "In the past time, a miller and his three sons live in a country. The miller inherits the mill to his eldest son, the donkey to his middle son, and the cat to his younger son. His little son would not be very pleased to inherit a cat for himself. The cat hears this and immediately asks the owner for a pair of boots. Using his intelligence, the cat is ready for a challenging task to prove to the owner that it is not a worthless inheritance at all. To make a young man rich. For this, he finds himself in a great competition, in a relentless struggle against Albazar, who is full of evil. The young man, unbeknownst to him, has been dragged into this adventurous game by his clever cat. A young man has no eyes for money, wealth. But his loving heart and honesty offer the young man riches that he cannot imagine. It proves to everyone that true wealth is love and sharing.",
                image: "19a.jpg",
                imagehover:"19b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Çizmeli Kedi"),
                time: "24/12/2023 - 19:00"
                },
                
                {
                title: "Fosforlu Cevriye",
                description: "Believing that she was born from the stars in the sky because she did not know her parents, growing up as a street child on the lap of the sea, performing performing arts to feed her belly in the Galata area, Cevriye is not an ordinary street girl, but actually the streets of Istanbul themselves. That night, when she is close to death from illness and cold, she clings to life and black love thanks to a mysterious Man who comes across her. This Man, who does not look like the men Cevriye has known before and addresses her as you, is actually a death row inmate who lives in secret. Cevriye has become a completely different person since the day she got to know him. Cevriye, who does not give up on this love despite imprisonment, exile, Decaying time and various troubles, will risk everything because she loves.",
                image: "20a.jpg",
                imagehover:"20b.jpg",
                price:"225",
                status:"In Stock",
                place:"Ankara - Yenimahalle Dört Mevsim Tiyatro Sahnesi",
                url: slugField("Fosforlu Cevriye"),
                time: "17/12/2023 - 20:00"
                },
                
                {
                title: "Dracula",
                description: "You should not be alone, because to be alone is to be full of fears and worries. Bram Stoker is the story of DRACULA, who tries to travel from Transylvania to England to find a new blood and spread the curse of the immortals. In the words of the author, the medieval nobleman DRACULA, who revived his Not Dead life, is the relentless battle of good and evil to build a new noble life with his love for Mina and the plan of his fate, which prepares his own end as a result of hypnosis. Bram Stoker's classic work DRACULA Deconstructs with the performing arts. This magnificent musical, where you will listen to their music for the first time, is being presented to the audience in Turkey with the Kumbara Visual Arts production.",
                image: "21a.jpg",
                imagehover:"21b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Caddebostan Kültür Merkezi",
                url: slugField("Dracula"),
                time: "16/12/2023 - 21:00"
                },
                
                {
                title: "Todes Müzikali",
                description: "Alla Duhova Todes Dance Empire in Turkey Founded by Alla Duhova in 1986, the dance troupe has grown into a large dance and show empire with more than 400 dance schools and more than 8,000 students around the world.  Today, Todes has become not only a dance troupe, but also a major movement called the Planet of Todes. He performs in many countries such as America, Australia, France, China, Bulgaria, Spain, Germany, United Arab Emirates, South Korea. Todes is a dance troupe that activates the basic instincts of people such as love, jealousy, waiting. At the same time, another title of the ensemble that performs the fastest dance show in the world in a synchronized state is THE FORMULA OF DANCE.",
                image: "22a.jpg",
                imagehover:"22b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Bostancı Gösteri Merkezi",
                url: slugField("Todes Müzikali"),
                time: "24/12/2023 - 20:00"
                },
                
                {
                title: "Hisseli Harikalar Kumpanyası",
                description: "The headliner of a tent theater touring in Anatolia transfers to another casino. The plot is about the company's search for a headliner and the events that developed when a village leader fell in love with a new headliner.",
                image: "23a.jpg",
                imagehover:"23b.jpg",
                price:"225",
                status:"In Stock",
                place:"Samsun - Aydın Gün Salonu",
                url: slugField("Hisseli Harikalar Kumpanyası"),
                time: "09/12/2023 - 19:00"
                },
                
                {
                title: "İçinden Tramvay Geçen Şarkı",
                description: "Nicotine Cloud Bar Presents with Joy! Who Has Ever Heard A Song With a Tram Running Through It? The Song Tram Passing Through You from the master pen of Ferhan Sensoy is also on the Ferhan Sensoy Stage of the Company this season!",
                image: "24a.jpg",
                imagehover:"24b.jpg",
                price:"225",
                status:"In Stock",
                place:"İzmir - Narlıdere AKM Gürdal Tosun Sahnesi",
                url: slugField("İçinden Tramvay Geçen Şarkı"),
                time: "10/12/2023 - 19:00"
                },
                
                {
                title: "Bir Garip Orhan Veli",
                description: "A Strange Orhan Veli, staged by the Reha Özcan Company, continues to meet with his audience.Orhan Veli saw a different color of life every day...sometimes combative waves...sometimes it rains sunny..the house is sometimes a shelter, sometimes a dungeon...there was something strange about that...he couldn't see the hole in front of him because his mind was elsewhere... In a Strange Orhan Veli, the immortal poet Orhan Veli's strings, which convey to us the joy, hope, passions, love of Istanbul in perfect language, meet art lovers again with the pen of master writer Murathan Mungan, the impressive acting of Reha Ozcan and the modern interpretation of director Murat Sari and Ayşegül Hardeyn. In a Strange Orhan Veli play, a striking stage language is used with images that blend technology and music.",
                image: "25a.jpg",
                imagehover:"25b.jpg",
                price:"225",
                status:"In Stock",
                place:"İzmir - Narlıdere AKM Gürdal Tosun Sahnesi",
                url: slugField("Bir Garip Orhan Veli"),
                time: "23/12/2023 - 19:30"
                },
                
                {
                title: "Bernarda",
                description: "Bernarda is a new one-person theater text rewritten by Pelin Temur based on the famous play The House of Bernarda Alba by Federico Garcia Lorca. Bernarda creates a small model of all the repressive regimes we know with the authority she establishes by declaring mourning inside the house. We see the sexist pressure that the authority applies to women's identity with the stunning performance of Özge Arslan, who portrays 5 different women on the stage. The game is presented to the audience with live Fandangos and Flamenco samples.",
                image: "26a.jpg",
                imagehover:"26b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Kadıköy Boa Sahne",
                url: slugField("Bernarda"),
                time: "16/12/2023 - 21:00"
                },
                
                {
                title: "Orada Duruverseydi Zaman",
                description: "But how little we know about our past, my dear!These sentences are not from a movie frame; they are pouring out of Pınar Ayhan's mouth.  Pınar Ayhan introduces you to the names you have never known or the different aspects of those you have heard of in his one-man musical show There Duruversey Zaman... This show tells stories about moments that are so beautiful that they make you say, I wish time had stopped there, or sad memories that make you say, fortunately, it's in the past. In this show, there will be a story from Kah Çanakkale, a letter written by a famous writer to his girlfriend...  There's so much hidden between the lines, your past. Dec... Moreover, these stories are all from real life. We are without lies, complete, more... As it is... But for some reason we know very little... Maybe the time to learn these stories has come now. What do you think? ",
                image: "27a.jpg",
                imagehover:"27b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Beşiktaş Mustafa Kemal KM Atilla İlhan Sahnesi",
                url: slugField("Orada Duruverseydi Zaman"),
                time: "24/12/2023 - 19:00"
                },
                
                {
                title: "Goldilocks And The Three Bears",
                description: "Do you want to support him as he prepares for the Goldilocks big show? While he wants to create wonders with his violin, some setbacks may haunt Goldilocks. While looking for solutions to these mishaps, a Bear may trespass into the hut belonging to his family. He may have other minor mishaps at the cabin he broke into. The bear family may not welcome these setbacks. You don't want to leave Goldilocks alone during this process. So, will he be able to find a solution to the problem with the Goldilocks violin at the end of the game? You will not be able to stop accompanying the songs in this game, which is adapted from the story called Goldilocks and the Three Bears, one of the most famous stories in the world, with the quality of a Theatrical Elephant and staged in a musical style.",
                image: "28a.jpg",
                imagehover:"28b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Torium Sahne",
                url: slugField("Goldilocks And The Three Bears"),
                time: "10/12/2023 - 19:30"
                },
                
                {
                title: "Ariel Küçük Deniz Kızı",
                description: "The princess, who lives a happy life in the Ocean Kingdom, is curious about the life of people. The Ocean King, who does not want his daughter to be upset, forbids her to approach people. The little mermaid does not listen to her father and starts watching a handsome prince who is traveling on a ship. But a terrible storm breaks out and the mermaid saves the prince's life. The mermaid who is in love with the prince has to make a deal to get to him. The decision that the mermaid will make is very important; she makes an important sacrifice to become a human and get her prince... The game is the story of a sacrifice made in the name of love. While describing the greatness of sharing and love, he draws bold lines underlining that we should be sensitive about the cleanliness of our environment and our seas.",
                image: "29a.jpg",
                imagehover:"29b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Ariel Küçük Deniz Kızı"),
                time: "17/12/2023 - 19:30"
                },
                
                {
                title: "Oyuncak Hikayesi",
                description: "On her birthday, an old book that Clara found in her grandfather's toy store becomes the key to a magical journey.  Clara will be accompanied by her toy friends Tin Sovalye, Ballerina, Dinosaur Boni, Princess Bety and Bullet Soldier on this trip to the Land of Toys. Interesting mind games are waiting for our heroes who will rediscover the importance of friendship, sacrifice, courage and sharing in this adventure. You will feel yourself in the Land of Toys in this mysterious musical story. Impressive colorful costumes, dance performances, sound and lighting effects were prepared for this musical",
                image: "30a.jpg",
                imagehover:"30b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Oyuncak Hikayesi"),
                time: "31/12/2023 - 19:00"
                },
                
                {
                title: "Oz Ülkesi",
                description: " The Land of Oz, which is about Dorothy's adventures, will give children joyful moments. As for the subject of the game, in which Light, Costume, Decor, Music and Choreography are skillfully used,While Dorothy spends time in the garden of her house, she dreams of a colorful country. Just at this time, after the storm that broke out, he finds himself in a colorful, magical country. Although she likes it very much here, Dorothy, who wants to return home, asks the kind-hearted witch who first came across her to do so. ",
                image: "31a.jpg",
                imagehover:"31b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Oz Ülkesi"),
                time: "24/12/2023 - 19:30"
                },
                
                {
                title: "Aladdin Müzikali",
                description: " In the musical play adapted to the stage of the world-famous fairy tale Aladdin's Magic Lamp, the magic lamp he found in the Cave of Miracles changes Aladdin's life. However, the Sultan's vizier Jafar is after the secret powers of the lamp. Aladdin has a power that no one else has. And that's the Magic Lamp. He will have to embark on a difficult adventure to reach Princess Jasmine.",
                image: "32a.jpg",
                imagehover:"32b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Fişekhane İkinci Sahne",
                url: slugField("Aladdin Müzikali"),
                time: "31/12/2023 - 20:00"
                },
                
                {
                title: "Tangopera",
                description: "An old inn in Beyoğlu stands tall, defying time, and hosts many a colourful motley of tenants. The daughter of the owner of the inn, Turgut Bey, is to be married, and everyone has developed a great interest in the event. All the same, the excitement soon shades off into solicitude since there is a piece of bad news in the air that shall affect all tenants: the historical inn where they reside is to turn into a venue of entertainment, and all shall be displaced. To cap it all, misfortunes never come alone. While they struggle to devise a solution to this trouble, they are to be tested for their friendship, fidelity, and loyalty.",
                image: "33a.jpg",
                imagehover:"33b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Kadıköy Belediyesi Süreyya Opera Sahnesi",
                url: slugField("Tangopera"),
                time: "10/12/2023 - 21:00"
                },
                
                {
                title: "Dolap Gençlik Müzikali",
                description: " They were on a bridge between what they had to be and what they wanted to be.Dec. The locker takes place in a possible future, at a time when the time is not determined, in a school corridor, in front of school lockers. It tells the story of young people who are looking for the most obvious features of the system, who are trying to Decouple from what they have been taught, to find their own identity among traditions, impositions and rules. This original and different text written by Yonca Inal, which will also make an important contribution to the understanding of adolescence for young people and families, met with the music of Or Decun Tekelioğlu and Arda Aydın and the choreography of Ece Irmak Albayrak.",
                image: "34a.jpg",
                imagehover:"34b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Şişli Tiyatrosu",
                url: slugField("Dolap Gençlik Müzikali"),
                time: "09/12/2023 - 20:30"
                },
            {
                title: "Masquerade",
                description:"Governor Riccardo is secretly in love with Amelia, the wife of his close friend Renato. Love in general is not unrequited. “Amelia is also in love with Him. When Riccardo is asked to commute the death penalty of Ulrica, a famous sorceress and fortune teller from his town, he considers having his fortune told for a change of identity.",
                image:"35a.jpg",
                imagehover:"35b.jpg",
                price:"225",
                status:"In Stock",
                place:"Ankara - DOB",
                url: slugField("Masquerade"),
                time: "24/12/2023 - 19:00"
            },
            {
                title: "Stand Up İstanbul",
                description: "Stand Up Istanbul's best comedians meet at Kadıköy MOTTO SAHNE... In this night, where different health professional comedians will take the stage, you will have fun and experience Kadıköy Motto Stage with its wonderful atmosphere... In the night moderated by İsmail Nuri, Fun and laughter-filled moments await all stand-up lovers.",
                image: "36a.jpg",
                imagehover:"36b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Motto Sahne Kadıköy",
                url: slugField("Stand Up İstanbul"),
                time: "17/12/2023 - 18:45"
            },
            {
                title: "New Year Concert",
                description: "New Year Concert Izmir DOB, Trumpet: Tolga Bilgin, Bartu Çelik, İbrahim Uluçay, Trombone: Mümtaz Angry, Saxophone: Fevzi Onur Ustabaş, Drums: Bora Peynirci, Vibraphone: Alp Özdayı, Guitar: Tolga Duyulur, Piano: Doruk Çebi, Double Bass: Selim Gürcan, Vocals: Zafer Zencirli, Ezgi Alaş",
                image: "37a.jpg",
                imagehover:"37b.jpg",
                price:"225",
                status:"In Stock",
                place:"İzmir - Bornova KSM Necdet Aydın Sahnesi",
                url: slugField("New Year Concert"),
                time: "31/12/2023 - 18:45"
            },
            {
                title: "Hürrem Sultan",
                description: "In the courtyard vacated by the courtiers present, Valide Sultan, little Prince Mustafa and her mother Gülbahar congratulate Sultan Süleyman on his accession to the Throne. She doesn't give the opportunity to her mother who wants to kiss her skirt. She lives in the palace. Valide Sultan, together with the Advisor, chooses a concubine to be presented to her hard-working son.",
                image: "38a.jpg",
                imagehover:"38b.jpg",
                price:"225",
                status:"In Stock",
                place:"Mersin - Opera Büyük Sahne",
                url: slugField("Hürrem Sultan"),
                time: "16/12/2023 - 21:00"
            },
            {
                title: "When Children Cry",
                description: "For children, the whole world is a playground. Whatever adults fill that world with, the child learns it, is exposed to it, and reflects it. With the Children Crying project, we convey what children see in our world and translate it into the language of dance. There are wars, migrations, exiles, disappearances and violence in the world today.",
                image: "39a.jpg",
                imagehover:"39b.jpg",
                price:"225",
                status:"In Stock",
                place:"xxx",
                url: slugField("When children cry"),
                time: "23/12/2023 - 20:00"
            },
            {
                title: "Anatomy Exhibition of Real Animals",
                description: "This anatomical exhibition, where you will marvel at the enormous diversity of the animal kingdom and the complexity of organisms, not only shows the complexity of the internal structure of animals, but also reveals how the anatomy and organs of different animal species are perfectly adapted to natural life.",
                image: "40a.jpg",
                imagehover:"40b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Metropol AVM",
                url: slugField("Anatomy Exhibition of Real Animals"),
                time: "31/12/2023 - 19:00"
                },
                
                {
                title: "Luna - Anatolian Fire",
                description: "Are you ready to grow with the light of LUNA? LUNA Dance Show is an imaginary country journey where Anatolian Ateşi's 23 years of stage experience will be reflected and the young people he has trained will be exhibited.",
                image: "41a.jpg",
                imagehover:"41b.jpg",
                price:"225",
                status:"In Stock",
                place:"Antalya - Atatürk Merkezi Aspendos Salonu",
                url: slugField("Luna - Anatolian Fire"),
                time: "24/12/2023 - 18:45"
                },
                
                {
                title: "Pure Comedy",
                description: "The purest form of comedy... A first on stage... The audience has never experienced such events...",
                image: "42a.jpg",
                imagehover:"42b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Kups Mekan",
                url: slugField("Pure Comedy"),
                time: "10/12/2023 - 18:45"
                },
                
                {
                title: "Fashion Week Turkey - Azerbaijan Exposure",
                description: "The most comprehensive and prestigious fashion platform of the 7 continents, which will be held in Fairmont-Flame Tower in Baku, Azerbaijan on April 27, 2024, our Fashion Week Turkey-Azerbaijan Expo support is presented to fashion lovers with fashion shows of local and foreign textile brands. You can buy tickets from the website Biletnal.com to join our ground level Azerbaijan organization with local and foreign famous guests and guests. Hurry up, get your ticket.",
                image: "43a.jpg",
                imagehover:"43b.jpg",
                price:"225",
                status:"In Stock",
                place:"Azerbaijan - Bakü Flame Towers",
                url: slugField("Fashion Week Turkey - Azerbaijan Exposure"),
                time: "16/12/2023 - 21:00"
                },
                
                {
                title: "Izmir Horror Houses",
                description: "We have a total of 8 branches within Cube Korku Evleri, which has been operating professionally since 2014, including Alsancak, Karşıyaka, Buca and Bornova.",
                image: "44a.jpg",
                imagehover:"44b.jpg",
                price:"225",
                status:"In Stock",
                place:"İzmir - Cube Entertainment",
                url: slugField("Izmir Horror Houses"),
                time: "23/12/2023 - 19:00"
                },
                
                {
                title: "Workshop Ankara",
                description: "You can join us for many different events, either alone or with your loved ones, wherever you want. We are definitely waiting for you at Social Sanathane Ankara!",
                image: "45a.jpg",
                imagehover:"45b.jpg",
                price:"225",
                status:"In Stock",
                place:"Ankara - Kapı Ankara Tunus",
                url: slugField("Workshop Ankara"),
                time: "24/12/2023 - 20:00"
                },
                
                {
                title: "Free Art House",
                description: "Our activities include different activities such as making masks, creating sculptures, designing cloth bags and painting. You can participate in these creative activities alone or with your loved ones. Özgür Sanat Evi is a great place for art lovers.",
                image: "46a.jpg",
                imagehover:"46b.jpg",
                price:"225",
                status:"In Stock",
                place:"Kırıkkale - Baraka Cafe",
                url: slugField("Free Art House"),
                time: "09/12/2023 - 19:45"
                },
                
                {
                title: "Istanbul Robot Show",
                description: "It is a museum where robots, robot prototypes and the equipment used in the production of robots are exhibited, which are produced within AKINROBOTICS' aim of 100% domestic production, aiming to serve humanity and science. There are many areas within the museum that will allow children and adults to meet new technologies and spend time.",
                image: "47a.jpg",
                imagehover:"47b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Robot Müzesi",
                url: slugField("Istanbul Robot Show"),
                time: "17/12/2023 - 18:45"
                },
                
                {
                title: "Tolgshow",
                description: "Tolga Çevik, who made millions laugh with the character of My Friend, appears before the actor in the Turkey Tour of the improvisational play that has become a classic on stage. 'My Friend', which has not been used in the unthinkable place of 'The Director' until today, started to take part in the Turkey Tour.",
                image: "48a.jpg",
                imagehover:"48b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Bostancı Gösteri Merkezi",
                url: slugField("Tolgshow"),
                time: "16/12/2023 - 18:45"
                },
                
                {
                title: "APKHAZETI",
                description: "A wonderful show performed by the Georgian State Ensemble APKHAZETI with live choir and orchestra. APHKHAZETI is an unusual combination of Georgian dances and strictly adheres to the rules of this nation. APHKHAZETI is a visible fusion of Georgian dance, strongly based on the tradition of this country, combined with contemporary choreography and music.",
                image: "49a.jpg",
                imagehover:"49b.jpg",
                price:"225",
                status:"In Stock",
                place:"Mersin - Yenişehir Belediyesi Atatürk Kültür Merkezi",
                url: slugField("APKHAZETI"),
                time: "24/12/2023 - 19:00"
                },
                
                
                {
                title: "Brands Festival",
                description: "Festival Park Kadıköy, affiliated with İBB Kültür AŞ, will host the Brands Festival between 25 November and 24 December. The Brands Festival provides an important opportunity for Istanbulites to access quality and affordable products of Turkey's distinguished brands during the winter period and New Year's Eve. While it is being created, it will also be a lifeline within the scope of the Istanbul Foundation's Grow Your Dreams social responsibility project.",
                image: "50a.jpg",
                imagehover:"50b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Kadıköy Festival Park",
                url: slugField("Brands Festival"),
                time: "10/12/2023 - 21:00"
                },
                
                {
                title: "Listening Club",
                description: "We gather together at the Listening Club, where you listen to songs selected from among the requested songs and chat about them, with the theme of guitar solo coming together. You can register via Radar Istanbul mobile for the event, which will come with a limited capacity.",
                image: "51a.jpg",
                imagehover:"51b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Müze Gazhane",
                url: slugField("Listening Club"),
                time: "09/12/2023 - 16:00"
                },
                
                {
                title: "Tambourine Workshop",
                description: "Tambourine, the ancient instrument of Anatolia and Mesopotamia, is at the Panorama 1453 History Museum. You can register for a future def workshop run by DefIstanbul via Radar Istanbul.",
                image: "52a.jpg",
                imagehover:"52b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Panorama 1453 Tarih Müzesinde",
                url: slugField("Tambourine Workshop"),
                time: "17/12/2023 - 20:00"
                },
                
                {
                title: "Laughing is Beautiful",
                description: "Museum Gazhane's entertaining TV series, Laughing is Beautiful, is hosting MEF University students this week.",
                image: "53a.jpg",
                imagehover:"53b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - Müze Gazhane",
                url: slugField("Laughing is Beautiful"),
                time: "16/12/2023 - 20:00"
                },
                
                
                {
                title: "Literacy Meetings",
                description: "This week's guest of the Reader and Writer Meetings will be journalist and writer Elçin Poyrazlar. Elçin Poyrazlar, who started journalism while doing her doctorate in political economy in Brussels, worked for important media meetings such as Cumhuriyet, TimeOut, BBC etc. His first detective novels, Death of a Journalist, were published in 2014, Black Muska in 2016, and The Woman in the Coat in 2018. He was accepted into the British Crime Writers' Association (CWA) in 2016.",
                image: "54a.jpg",
                imagehover:"54b.jpg",
                price:"225",
                status:"In Stock",
                place:"İstanbul - İstanbul Kitapçısı Kadıköy Şubesi",
                url: slugField("Literacy Meetings"),
                time: "23/12/2023 - 20:00"
                },
            {
                title: "Oppenheimer",
                description:"The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                image:"55a.jpg",
                imagehover:"55b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("Oppenheimer"),
                time: "16/12/2023 - 19:00"
            },
            {
                title: "Spider-Man: Across the Spider-Verse",
                description:"Miles Morales catapults across the multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
                image:"56a.jpg",
                imagehover:"56b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("Spider-Man: Across the Spider-Verse"),
                time: "17/12/2023 - 20:00"
            },
            {
                title: "Beau Is Afraid",
                description:"Following the sudden death of his mother, a mild-mannered but anxiety-ridden man confronts his darkest fears as he embarks on an epic, Kafkaesque odyssey back home.",
                image:"57a.jpg",
                imagehover:"57b.jpg",
                price:"225",
                status:"In Stock",
                place:"Altunizade Capitol Spectrum Cineplex",
                url: slugField("Beau Is Afraid"),
                time: "23/12/2023 - 20:00"
            },
            {
                title: "Infinity Pool",
                description:"James and Em Foster are enjoying an all-inclusive beach vacation in the fictional island of La Tolqa, when a fatal accident exposes the resort's perverse subculture of hedonistic tourism, reckless violence and surreal horrors.",
                image:"58a.jpg",
                imagehover:"58b.jpg",
                price:"225",
                status:"In Stock",
                place:"Altunizade Capitol Spectrum Cineplex",
                url: slugField("Infinity Pool"),
                time: "10/12/2023 - 20:00"
            },
            {
                title: "Talk to Me",
                description:"When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
                image:"59a.jpg",
                imagehover:"59b.jpg",
                price:"225",
                status:"In Stock",
                place:"Pendik Cinema Neomarin",
                url: slugField("Talk to Me"),
                time: "24/12/2023 - 20:00"
            },
            {
                title: "Air",
                description:"Follows the history of sports marketing executive Sonny Vaccaro, and how he led Nike in its pursuit of the greatest athlete in the history of basketball, Michael Jordan.",
                image:"60a.jpg",
                imagehover:"60b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("Air"),
                time: "16/12/2023 - 20:00"
            },
            {
                title: "The Killer",
                description:"After a fateful near-miss, an assassin battles his employers and himself, on an international manhunt he insists isn't personal.",
                image:"61a.jpg",
                imagehover:"61b.jpg",
                price:"225",
                status:"In Stock",
                place:"Pendik Cinema Neomarin",
                url: slugField("The Killer"),
                time: "09/12/2023 - 20:00"
            },
            {
                title: "The Holdovers",
                description:"A cranky history teacher at a remote prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
                image:"62a.jpg",
                imagehover:"62b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("The Holdovers"),
                time: "17/12/2023 - 20:00"
            },
            {
                title: "Elemental",
                description:"Follows Ember and Wade, in a city where fire-, water-, earth- and air-residents live together.",
                image:"63a.jpg",
                imagehover:"63b.jpg",
                price:"225",
                status:"In Stock",
                place:"Altunizade Capitol Spectrum Cineplex",
                url: slugField("Elemental"),
                time: "31/12/2023 - 20:00"
            },
            {
                title: "Past Lives",
                description:"Nora and Hae Sung, two deeply connected childhood friends, are wrested apart after Nora's family emigrates from South Korea. Twenty years later, they are reunited for one fateful week as they confront notions of love and destiny.",
                image:"64a.jpg",
                imagehover:"64b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("Past Lives"),
                time: "23/12/2023 - 20:00"
            },
            {
                title: "Passages",
                description:"A gay couple's marriage is thrown into crisis when one of them impulsively begins a passionate affair with a young woman.",
                image:"65a.jpg",
                imagehover:"65b.jpg",
                price:"225",
                status:"In Stock",
                place:"Altunizade Capitol Spectrum Cineplex",
                url: slugField("Passages"),
                time: "24/12/2023 - 20:00"
            },
            {
                title: "The Covenant",
                description:"During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
                image:"66a.jpg",
                imagehover:"66b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("The Covenant"),
                time: "09/12/2023 - 20:00"
            },
            {
                title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
                description:"The film follows the Turtle brothers as they work to earn the love of New York City while facing down an army of mutants.",
                image:"67a.jpg",
                imagehover:"67b.jpg",
                price:"225",
                status:"In Stock",
                place:"Paribu Cineverse Emaar Square Mall",
                url: slugField("Teenage Mutant Ninja Turtles: Mutant Mayhem"),
                time: "17/12/2023 - 20:00"
            },
            {
                title: "Barbie",
                description:"Barbie suffers a crisis that leads her to question her world and her existence.",
                image:"68a.jpg",
                imagehover:"68b.jpg",
                price:"225",
                status:"In Stock",
                place:"Altunizade Capitol Spectrum Cineplex ",
                url: slugField("Barbie"),
                time: "16/12/2023 - 18:45"
            },
            {
            title: "Mikadonun Çöpleri",
            description: "Türk edebiyatına Orhan Veli Kanık, Oktay Rıfat ile birlikte “garip” akımınıgetiren yazarımız Melih Cevdet Anday’ın zamansız oyunu “Mikado’nun Çöpleri”sosyal baskılar altında büyümüş ve sıkışmış bireylerin yalnızlaşma yolundakiçırpınışını yine garip bir dille anlatıyor. ",
            image: "69a.jpg",
            imagehover:"69b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Caddebostan Kültür Merkezi A Salonu",
            url: slugField("Mikadonun Çöpleri "),
            time: "24/12/2023 - 20:30"
            },
            {
            title: "İki Maymun",
            description: " Ne olursa olsun devam etmesi gereken gösteri dünyasının, en büyük iki maymununun hikayesi başlıyor. İyi seyirler ve iyi ki varsınız. Fatih Güneruz ve Berk Konaçoğlu'nun yazıp, yönetip, oynadığı İki Maymun oyunu Aralık ayından itibaren İpekten Sahne'de.",
            image: "70a.jpg",
            imagehover:"70b.jpg",
            price:"225",
            status:"In Stock",
            place:"Antalya - İpekten Sahne ",
            url: slugField("İki Maymun "),
            time: "31/12/2023 - 20:30"
            },
            {
            title: "Kozalar",
            description: " Şatafatlı sandıkları sıkıcı hayatları dışında, dış dünyanın varlığına kendilerini tamamen kapamış, birbirinden gösterişli üç kibirli kadının, içler acısı kara trajikomik hikayesi sizleri bekliyor. ",
            image: "71a.jpg",
            imagehover:"71b.jpg",
            price:"225",
            status:"In Stock",
            place:" İzmir - Bi'nevi Tiyatro ",
            url: slugField("Kozalar"),
            time: "10/12/2023 - 21:00"
            },
            {
            title: "Dava",
            description: " Franz Kafka’nın aynı isimli romanından Yakın Tiyatro tarafından sahneye uyarlanmıştır. ",
            image: "72a.jpg",
            imagehover:"72b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Fişekhane İkinci Sahne",
            url: slugField("Dava"),
            time: "16/12/2023 - 20:30"
            },
            {
            title: "Hoşçakal Sabo",
            description: " Ahsen, metropol karmaşasında yalnız ve monoton bir hayat süren, hiç evlenmemiş, home-office çalışarak geçici işler yapan 40 yaşında bir kadın... En büyük hayali olan sinema ve tiyatro oyunculuğunu gerçekleştirmeye 3 yıl önce karar vermiş fakat dişe dokunur bir rol kapamamıştır. Bu süreçte anne baba travmalarından yansıyıp zamanla kendi iç sesine dönüşen gölge yanlarıyla ve sürekli sabote edilme hissiyle mücadele eder. ",
            image: "73a.jpg",
            imagehover:"73b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Caddebostan Kültür Merkezi A Salonu ",
            url: slugField("Hoşçakal Sabo"),
            time: "10/12/2023 - 20:00"
            },
            {
            title: "Kaktüslü Adam",
            description: " İşsizlik temelli intiharların arttığı bir dönemde, yeni çıkacak yasaya göre 1 Mayıs saat 11:00'den sonra intihar edenlerin yakınlarına ağır hapis ve para cezaları verilecektir. Bir grup intihara meyilli insanın yolu bu 1 Mayıs sabahı bir parkta kesişir ve kendilerini öldürüp öldürmeyeceklerine yönelik geri sayım başlar. ",
            image: "74a.jpg",
            imagehover:"74b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - CerModern Konferans Salonu ",
            url: slugField("Kaktüslü Adam"),
            time: "24/12/2023 - 20:30"
            },
            {
            title: "Kalabalık Duası",
            description: " Fiziksel Tiyatro Araştırmaları, Şatonun Altında'dan sonra yepyeni bir araştırmanın sonucunu seyirciyle paylaşmaya hazır. Bu defa özgün bir metni sahneye taşırken anlatının fiziksel ve disiplinler arası olanaklarının peşine düşüyoruz. Tek kişilik oyun yaklaşımları, resim, plastik sanatlar, fotoğraf, çağdaş dans, geleneksel tiyatro, clown, hikaye anlatıcılığı gibi farklı alanlara temas ediyoruz. ",
            image: "75a.jpg",
            imagehover:"75b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Kadıköy Boa Sahne ",
            url: slugField("Kalabalık Duası"),
            time: "17/12/2023 - 19:00"
            },
            {
            title: "Yüreğim Dağlardadır ",
            description: " Nereye aitiz? Köklerimiz nerede? Neyi hatırlıyoruz? Neden hatırlıyoruz? Neye özlem duyuyoruz? Eugene Ionesco’nun Kel Şarkıcı’sı ve Samuel Beckett’in Godot’yu Beklerken’inden önce yazılan ve absürt tiyatronun öncüllerinden biri olarak kabul edilen Yüreğim Dağlardadır, 1914 yılının Fresno, Kaliforniya’sında yolunu kaybetmiş, kendini dünyadan kopmuş gibi hisseden eski bir Shakespeare aktörü Mc Gregor’un yaşlı bir anne, oğlu ve torunundan oluşan bir çekirdek aile ile karşılaşmasını konu alıyor. ",
            image: "76a.jpg",
            imagehover:"76b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul  - Cihangir Atölye Sahnesi ",
            url: slugField("Yüreğim Dağlardadır "),
            time: "09/12/2023 - 19:00"
            },
            {
            title: "Şatonun Altında",
            description: " William Shakespeare'in Macbeth oyunundan uyarlanmıştır. Kan, kanı çağırır derler... Ne kadar zamandır orada olduğunu bilmediğimiz, sayısız krallığa, savaşa, yıkıma tanık olmuş iki çamaşırcı kadın! ",
            image: "77a.jpg",
            imagehover:"77b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - House Of Performance Ana Sahne ",
            url: slugField("Şatonun Altında"),
            time: "16/12/2023 - 21:00"
            },
            {
            title: "Toz",
            description: "Murat Mahmutyazıcıoğlu’nun kaleminden çıkan, çok kişiyle kesişen bu tek kişilik kadın oyunu, Hira Tekindor’un yönetiminde, Zerrin Tekindor’un performansıyla seyirciyle buluşacak.",
            image: "78a.jpg",
            imagehover:"78b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Fişekhane Ana Sahne",
            url: slugField("Toz"),
            time: "09/12/2023 - 20:00"
            },
            {
            title: "Eksik",
            description: "Datça’da hiçliğin ortasında bir çiftlik evi... Vazgeçmiş bir baba, çabalayan bir oğul ve yorgun bir sevgili... Yılın en sıcak günü… Hadi vedalaşalım. Hadi bak geliyor yangın. Ağaçlar gibi yanacağız birazdan.",
            image: "79a.jpg",
            imagehover:"79b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Sahne Dragos",
            url: slugField("Eksik"),
            time: "31/12/2023 - 20:30"
            },
            {
            title: "Canavar",
            description: "Canavar; bir imza günü için küçük bir Anadolu şehrine gelmiş olan roman yazarı Kemal Sönmez'in, yıllardır görüşmediği kuzenleri Aslı ve Derya’yı ziyaret etmesiyle başlar. Kız kardeşler bu habersiz ziyarete hazırlıksız yakalanır. İki kız kardeş, Kemal’in de önerisiyle tarifini unuttukları ve yıllardır yemedikleri aile yemekleri Kapamayı yapmaya karar verir. Yapması hatırladıklarından kolay, yemesi ise tahmin ettiklerinden zor olan yemek hazırlanırken, Kemal’in ziyaretinin altındaki gerçek sebep ortaya çıkar.",
            image: "80a.jpg",
            imagehover:"80b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Fişekhane Ana Sahne",
            url: slugField("Canavar"),
            time: "17/12/2023 - 19:00"
            },
            {
            title: "Bir Delinin Hatıra Defteri Metin Zakoğlu",
            description: "Gogol Hırsız diye başlıyor Metin Zakoğlu'nun Bir Delinin Hatıra Defteri anlatımı, sonra işler karışıyor. Zakoğlu bana ait ama çalınmış dediği hikayelerinin kahramanları yapıyor aniden seyircileri, köşede bir yerlerde duran adamı bölüm başkanı, önünde oturan kızı sevgilisi Sofya, kenarlardan şaşkın şaşkın bakan başka bir kadını hizmetçisi Mavra olarak görmeye başlıyor.",
            image: "81a.jpg",
            imagehover:"81b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Cafe Theatre",
            url: slugField("Bir Delinin Hatıra Defteri Metin Zakoğlu"),
            time: "09/12/2023 - 18:30"
            },
            {
            title: "Bir İdam Mahkumunun Son Günü",
            description: "İdam cezasına çarptırılan bir mahkûmun bu cezayı beş hafta öncesinden öğrenmesi ve bu süre içinde nasıl giderek insanlıktan çıkıldığını; anlatan eser, tiyatro uyarlaması ile seyirci karşısına çıkıyor. Oyun, idam infazlarını bir eğlence gibi izleyen halkın yanında; adalet, ceza hukuku, ölüm cezaları gibi güncel konuları seyirciye sorgulatarak mahkûmun yargılanmasını ve idama gidiş sürecini anlatmaktadır.",
            image: "82a.jpg",
            imagehover:"82b.jpg",
            price:"225",
            status:"In Stock",
            place:"Bolu - Necip Fazıl Kültür Merkezi",
            url: slugField("Bir İdam Mahkumunun Son Günü"),
            time: "09/12/2023 - 19:45"
            },
            {
            title: "Kuyu",
            description: "Aşkı, doğruları, yanlışları, sırları, sınırları anlamak için yaklaş, yakınlaş. Çünkü bu Kuyu seni içine çekecek. Sen istemesen de içine hapsedecek. Victor ve Mari'nin aşkı sizi bambaşka bir yolculuğa davet ediyor. Kuyu oyunu Sahne Tozu Tiyatrosu'nda başlıyor!",
            image: "83a.jpg",
            imagehover:"83b.jpg",
            price:"225",
            status:"In Stock",
            place:"İzmir - Sahne Tozu Tiyatrosu Fehmi İşgören Sahnesi ",
            url: slugField("Kuyu"),
            time: "17/12/2023 - 20:00"
            },
            {
            title: "Plato",
            description: "Yokluğun içerisinde varlığa iten ortam psikolojisi ve bizi yokluğa çeken sistem adaletsizliğini en derin haliyle kaleme alan Gogol’un paltosunda hala yaşadığımız hayatlar saklıdır. Hayatın içerisinde günümüzde dahi hala bir sürü Akakiyeviçler bulunmaktadır. İşte tamda bu yüzden “ Hepimiz Gogol’un paltosundan çıktık. Tek kişi ile oyun içerisinde bir çok karakteri sahneyecek oyuncu ve farklı bir reji ile ele alan yönetmen yorumu Gogol’un tarzına farklı bir üslup getirmektedir. ",
            image: "84a.jpg",
            imagehover:"84b.jpg",
            price:"225",
            status:"In Stock",
            place:"Ankara - Bergüzar Sahne ",
            url: slugField("Plato"),
            time: "10/12/2023 - 21:00"
            },
            {
            title: "Güzel Son",
            description:  "Orhan Veli, Melih Cevdet, Nurullah Ataç, Sait Faik, Suat Derviş, Halim Şefik, Lambo ve aslında hepimizin ihtiyacı olan bir güzel son... Yeni bir söz değil hayatın geçici ama sanat ve edebiyatın sonsuz olduğu. Şairler ölür, şiirler yaşar. Teselli edici bir söz değil bu. Hayatları olan bu insanları şimdi sadece eserleri ile biliyoruz ama evet onların kaygıları, hüzünleri, sevinçleri, güzel günleri de vardı. Kimisi uzun yaşadı, kimisi 35'ini ancak gördü fakat hepsi erken öldü. Peki hala yaşıyor olsaydı Orhan, Melih, Nurullah, Sait, Suat, Şefik ve hepsi Lambo'nun meyhanesinde bir akşam buluşsalardı, biz de orada olsaydık... Daha güzel bir son olmaz mıydı bu?",
            image: "85a.jpg",
            imagehover:"85b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - House Of Performance Ana Sahne ",
            url: slugField("Güzel Son"),
            time: "16/12/2023 - 18:45"
            },
            {
            title: "Baba ve Oğulları",
            description: " Oyunumuzda her zaman gözümüzün önünde olan bir aile dramının derinliklerine dalacağız. Bir baba evlatları için ne yapar,ne kadar ileriye gider bu soruların cevabı oyunumuzda.",
            image: "86a.jpg",
            imagehover:"86b.jpg",
            price:"225",
            status:"In Stock",
            place:" Erzurum - Medya Sanat Evi Oda Tiyatrosu ",
            url: slugField("Baba ve Oğulları"),
            time: "24/12/2023 - 18:45"
            },
            {
            title: "Bir Garip Orhan Veli & Taburenin Hikayesi",
            description: "Kendine has tarzı ile okurlarını şiir aleminin gizinde gezdiren hem şiirleri hem kendisi pek bir garip adam olan Orhan Veli’nin Osman Genç tarafından bütün şiirleri oyunlaştırılmış ve tekrar kurgulanıp sahne üstünde hayat bulmuştur. Orhan Veli Kanık’ın hm kendi karakteri hem şiirlerin de gizli hikayeleri su yüzüne çıkmış ve sahne üstünde seyircisiyle buluşmak için can atmakta…",
            image: "87a.jpg",
            imagehover:"87b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Pikola Sahnesi ",
            url: slugField("Bir Garip Orhan Veli & Taburenin Hikayesi"),
            time: "17/12/2023 - 21:00"
            },
            {
            title: "Veda Baladı",
            description: " Ankara Devinim Tiyatro Atölye Oyuncuları’nın ve Bambu Tiyatro Kulübünün ortak proje olarak hazırladığı VEDA BALADI, bir keman sanatçısı olan kadının, uzun zamandır komada olan kocası için  ötenazi istemesini ve karşılaştığı yasal / toplumsal sorunları tartışmaya açıyor. BENİM YERİMDE SİZ  OLSAYDINIZ, NE YAPARDINIZ? sorusunu seyirci ile birlikte hukuki ve toplumsal konjöktürde irdeleyen bu oyun aynı zamanda günümüz insanın aile, din ve kitleler önünde yargılanmasına eleştirel gözle bakıyor. ",
            image: "88a.jpg",
            imagehover:"88b.jpg",
            price:"225",
            status:"In Stock",
            place:" Ankara - Bambu Sahne",
            url: slugField("Veda Baladı"),
            time: "16/12/2023 - 19:00"
            },
            {
            title: "Yük",
            description: " Sürgün yolunda bile vatan hasreti çeken Nazım Hikmet RAN'ın, Rusya'da; ilk sürgün gecesini geçireceği odasına giriş anı... İlk bir saatinin soyut bir zamanda bütün hayatına denk getirildiği oyun, özgün bestelerin çalındığı canlı müzik eşliğinde, bir belgesel tadındadır. ",
            image: "89a.jpg",
            imagehover:"89b.jpg",
            price:"225",
            status:"In Stock",
            place:"İstanbul - Samimi Tiyatro ",
            url: slugField("Yük"),
            time: "23/12/2023 - 19:00"
            },
                
                


        ]);

    await categories[0].addProduct(products[0]);
    await categories[0].addProduct(products[1]);
    await categories[0].addProduct(products[2]);
    await categories[0].addProduct(products[3]);
    await categories[0].addProduct(products[4]);
    await categories[0].addProduct(products[5]);
    await categories[0].addProduct(products[6]);
    await categories[0].addProduct(products[7]);
    await categories[0].addProduct(products[8]);
    await categories[0].addProduct(products[9]);
    await categories[0].addProduct(products[10]);
    await categories[0].addProduct(products[11]);
    await categories[0].addProduct(products[12]);
    await categories[0].addProduct(products[13]);

    await categories[3].addProduct(products[14]);
    await categories[3].addProduct(products[15]);
    await categories[3].addProduct(products[16]);
    await categories[3].addProduct(products[17]);
    await categories[3].addProduct(products[18]);
    await categories[3].addProduct(products[19]);
    await categories[3].addProduct(products[20]);
    await categories[3].addProduct(products[21]);
    await categories[3].addProduct(products[22]);
    await categories[3].addProduct(products[23]);
    await categories[3].addProduct(products[24]);
    await categories[3].addProduct(products[25]);
    await categories[3].addProduct(products[26]);
    await categories[3].addProduct(products[27]);
    await categories[3].addProduct(products[28]);
    await categories[3].addProduct(products[29]);
    await categories[3].addProduct(products[30]);
    await categories[3].addProduct(products[31]);
    await categories[3].addProduct(products[32]);
    await categories[3].addProduct(products[33]);

    await categories[4].addProduct(products[34]);
    await categories[4].addProduct(products[35]);
    await categories[4].addProduct(products[36]);
    await categories[4].addProduct(products[37]);
    await categories[4].addProduct(products[38]);
    await categories[4].addProduct(products[39]);
    await categories[4].addProduct(products[40]);
    await categories[4].addProduct(products[41]);
    await categories[4].addProduct(products[42]);
    await categories[4].addProduct(products[43]);
    await categories[4].addProduct(products[44]);
    await categories[4].addProduct(products[45]);
    await categories[4].addProduct(products[46]);
    await categories[4].addProduct(products[47]);
    await categories[4].addProduct(products[48]);
    await categories[4].addProduct(products[49]);
    await categories[4].addProduct(products[50]);
    await categories[4].addProduct(products[51]);
    await categories[4].addProduct(products[52]);
    await categories[4].addProduct(products[53]);

    await categories[1].addProduct(products[54]);
    await categories[1].addProduct(products[55]);
    await categories[1].addProduct(products[56]);
    await categories[1].addProduct(products[57]);
    await categories[1].addProduct(products[58]);
    await categories[1].addProduct(products[59]);
    await categories[1].addProduct(products[60]);
    await categories[1].addProduct(products[61]);
    await categories[1].addProduct(products[62]);
    await categories[1].addProduct(products[63]);
    await categories[1].addProduct(products[64]);
    await categories[1].addProduct(products[65]);
    await categories[1].addProduct(products[66]);
    await categories[1].addProduct(products[67]);

    await categories[2].addProduct(products[68]);
    await categories[2].addProduct(products[69]);
    await categories[2].addProduct(products[70]);
    await categories[2].addProduct(products[71]);
    await categories[2].addProduct(products[72]);
    await categories[2].addProduct(products[73]);
    await categories[2].addProduct(products[74]);
    await categories[2].addProduct(products[75]);
    await categories[2].addProduct(products[76]);
    await categories[2].addProduct(products[77]);
    await categories[2].addProduct(products[78]);
    await categories[2].addProduct(products[79]);
    await categories[2].addProduct(products[80]);
    await categories[2].addProduct(products[81]);
    await categories[2].addProduct(products[82]);
    await categories[2].addProduct(products[83]);
    await categories[2].addProduct(products[84]);
    await categories[2].addProduct(products[85]);
    await categories[2].addProduct(products[86]);
    await categories[2].addProduct(products[87]);
    await categories[2].addProduct(products[88]);

    

    
}
module.exports = populate;