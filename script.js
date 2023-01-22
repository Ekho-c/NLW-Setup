const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
  run: ["01-16", "01-17", "01-18", "01-19", "01-20", "01-21", "01-22"],
  food: ["01-16", "01-17", "01-19", "01-20", "01-22"],
  workout: ["01-22"],
}

nlwSetup.setData(data)
nlwSetup.load()
