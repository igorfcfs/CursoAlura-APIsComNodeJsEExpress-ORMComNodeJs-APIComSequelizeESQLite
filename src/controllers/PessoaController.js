const Controller = require("./Controller.js");
const PessoaServices = require("../services/PessoaServices.js");

const pessoaServices = new PessoaServices();

class PessaController extends Controller {
  constructor(){
    super(pessoaServices);
  }
}

module.exports = PessaController;