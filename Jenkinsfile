/* groovylint-disable DuplicateStringLiteral */
/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm install playwright'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }

    post {
        always {
            script {
                allure([
                    includeProperties: false,
                    jdk: '',
                    properties: [],
                    reportBuildPolicy: 'ALWAYS',
                    results: [[path: 'target/allure-results']]
            ])
                publishHTML([
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright test execution report',
                    reportTitles: 'Playwright report'
            ])
            }
        }
        success {
            echo 'Test execution is SUCCESSFUL'
        }
        failure {
            echo 'Test execution is FAILED'
        }
    }

    tools {
        nodejs 'node16'
        allure 'allure-commandline'
    }
}
