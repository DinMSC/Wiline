const userEmailsData = [
    {
        email: 'delores@wiline.com',
        firstName: 'Delores',
        lastName: 'Mind',
    },
    {
        email: 'lorie@wiline.com',
        firstName: 'Lorie',
        lastName: 'Enak',
    },
    {
        email: 'emma@wiline.com',
        firstName: 'Emma',
        lastName: 'Fisk',
    },
];

const userPhoneNumberData = [
    {
        email: 'marina@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0105',
            },
        ],
    },
    {
        email: 'kip@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0168',
            },
        ],
    },
    {
        email: 'lorie@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0162',
            },
        ],
    },
    {
        email: 'jasmin@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0168',
            },
        ],
    },
    {
        email: 'emma@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0187',
            },
        ],
    },
    {
        email: 'elvia@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0164',
            },
        ],
    },
    {
        email: 'liliana@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0161',
            },
        ],
    },
    {
        email: 'florencio@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0127',
            },
        ],
    },
    {
        email: 'delores@wiline.com',
        phoneNumbers: [
            {
                type: 'primary',
                value: '202-555-0143',
            },
        ],
    },
];

const priorityData = (userEmailsData, userPhoneNumberData) => {
    const combinedData = [...userEmailsData, ...userPhoneNumberData].reduce(
        (accumulator, currentValue) => {
            const emailExists = accumulator.some(
                (item) => item.email === currentValue.email
            );

            if (!emailExists) {
                accumulator.push(currentValue);
            }

            return accumulator;
        },
        []
    );
    console.log(combinedData, 'log');
};
priorityData(userEmailsData, userPhoneNumberData);
