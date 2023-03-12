#!groovy


pipeline {

    agent any

stages{


    stage9("CheckOutGit"){

        steps{
            echo "cloning the filpkart project from github to container"
            checkout scm
            echo "succesfully cloned the openkart project"
            sh "ls -lrth"
        }


    }

    stage("DockerSetup"){
        steps{
            script{
                def dockerHome = tool 'mydocker'
                echo ">>>>>>>>${dockerHome}"
                env.PATH = "${dockerHome}/bin:${env.PATH}"
            }
        }
    }

    stage("Docker Check"){
        steps{
            
            script{
                echo "checking docker .................."
                sh "docker --version"
                sh "whoami"
            }
        }
    }
}


}