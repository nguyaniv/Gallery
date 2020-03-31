'use strict'
var gTrans = {
    id: {
        en: 'id',
        he: 'מזהה'
    },

    name: {
        en: 'name',
        he: 'שם'
    },

    image: {
        en: 'image',
        he: 'תמונה'
    },

    price: {
        en: 'price',
        he: 'מחיר'
    },

    read: {
        en: 'read',
        he: 'קרא עוד'
    },

    update: {
        en: 'update',
        he: 'עדכן'
    },

    delete: {
        en: 'delete',
        he: 'מחק'

    },
    addBook: {
        en: 'add new book',
        he: 'הוסף ספר חדש'

    },
    add: {
            en: 'add',
            he: 'הוסף'
    },
    priceSymbol: {
        en: '$',
        he: '₪'
    }


}



var gCurrLang = 'he';



function getTrans(transKey) {
    // Get from gTrans
    var langTransMap = gTrans[transKey]
    // If key is unknown return 'UNKNOWN'
    if (!langTransMap) return 'UNKNOWN';

    // If translation not found - use english
    var trans = langTransMap[gCurrLang]
    if (!trans) trans = langTransMap['en']
    return trans;
}



function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach(el => {
        const key = el.dataset.trans;
        const trans = getTrans(key)

        if (el.placeholder) el.placeholder = trans

        else el.innerText = trans
    })

    // for each el:
    //    get the data-trans and use getTrans to replace the innerText 
    //    ITP: support placeholder    
}



function setLang(lang) {
    gCurrLang = lang;
}


