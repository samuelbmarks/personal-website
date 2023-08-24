export class Data {

    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public phoneNumber: string,
      public phoneType: string,
      public preferredContact: string,
      public subject: string,
      public message: string
    ) {}

    /**
     * JSON Model:
     * 
     * "firstName": "Samuel",
     * "lastName": "Marks",
     * "email": "sam@justcallmesam.com",
     * "phoneNumber": "610-906-6198"
     * "phoneType": "Cell"
     * "preferredContact": "Phone"
     * "subject": "Meeting Request"
     * "message": "Hey there"
     */
  
  }
  