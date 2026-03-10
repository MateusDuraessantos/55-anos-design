import { projects } from '@/constants/projectsInfos.js'

export const verififyHashToOpenPopup = (callback) => {
  const hash = location.hash.slice(1)

  if (!hash) return // Se não tiver hash, não continua

  const selectedProject = projects.findIndex(obj => {
    const elem = obj.name_project
    return elem !== '' && formatText(elem) === hash
  })

  if(selectedProject === undefined) return // Se não encontrar o projeto, não continua
  
  callback(selectedProject)
}

export const formatText = (string) => {
  return string.normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .toLowerCase()
    .replace(/\s+/g, "-"); // espaço -> hífen
}

export const addHashWhenOpenPopup = (selectedProject) => {
  window.location.hash = formatText(selectedProject)
}