export class CategoryMaster {
    categoryId: number;
    descriptions: string;
    name: string;
    photoLink: string;
    status: string;
}

export class News {
    description: string;
    status: string;
    type: string;
}

export class ImageGallery {
    galleryId: number;
    link: string;
    name: string;
    status: string
}

export class Text {
    myTest: string;
}

export class Youtube {
    link: string;
    name: string;
    status: string;
    youtubeLinkId: number;
}

export class Product {
    descriptions: string;
    name: string;
    photoLink: string;
    productId: number;
    status: string;
    categoryId: number;
}

export class Login {
    email: string;
    password: string;
}

export class UserProfile {
    userId: number;
    fullName: string;
    mobileNo: string;
    email: string;
    password: string;
    status: string;
}

export class SendEmail{
 name : string;
 email : string;
 mobileNo : string;
 message : string;

}