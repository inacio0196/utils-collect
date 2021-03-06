const EMAIL_VALIDATE = /[a-zA-z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{3,}/ //email@email.com
const FULL_NAME_VALIDATE = /^[a-zA-Z]{1,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/ // Ethan Belmont da Silva
const CPF_VALIDATE = /[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}/ // 999.999.999-99
const BIRTHDATE_VALIDATE = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/19[789][0-9]|20[01][0-9]/ // 31/12/1970-2019
const CEL_VALIDATE = /\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{4}/ // (99) 99999-9999
const HEIGHT_VALIDATE = /[1-2],[1-9]{2}/ // 1-2,99
const WEIGHT_VALIDATE = /[0-9]{2}|[0-9]{2}\.[0-9]|[0-9]{3}\.[0-9]/ // 45 / 45.4 / 140.4