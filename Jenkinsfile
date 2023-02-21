pipeline {
  agent any
    
  tools {nodejs "node"}
    
  stages {

     stage('Check node version') {
      steps {
        sh 'node --version'
      }
    }
        
    // stage('Cloning Git') {
    //   steps {
    //     git 'https://github.com/CyrilBaah/blog-api.git'
    //   }
    // }
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh 'npm test'
      }
    }      
  }
}