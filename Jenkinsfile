#!groovy


pipeline {

stages{

    agent any

    stage{"CheckOutGit"}{

        steps{
            echo "cloning the filpkart project from github to container"
            checkout scm
            echo "succesfully cloned the openkart project"
            sh "ls -lrth"
        }


    }

    stage{"Docker Check"}{
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