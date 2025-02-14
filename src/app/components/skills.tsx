import SectionTitle from "./section-title";
import Skill from "./skill";

export default function Skills() {
  return (
    <div>
      <SectionTitle title="Skills" />
      <div className="space-y-3">
        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-neutral-500 dark:text-neutral-500">
              Languages:
            </span>
          </dt>
          <dd>
            <ul className="flex flex-wrap">
              <Skill name="Typescript" logo="/images/svg/typescript.svg" />
              <Skill name="Javascript" logo="/images/svg/javascript.svg" />
              <Skill name="PHP" logo="/images/svg/php.svg" />
              <Skill name="HTML" logo="/images/svg/html.svg" />
              <Skill name="CSS" logo="/images/svg/css.svg" />
              <Skill name="Java" logo="/images/svg/java.svg" />
              <Skill name="Bash" logo="/images/svg/bash.svg" />
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-neutral-500 dark:text-neutral-500">
              Frameworks:
            </span>
          </dt>
          <dd>
            <ul className="flex flex-wrap">
              <Skill name="Angular" logo="/images/svg/angular.svg" />
              <Skill name="React" logo="/images/svg/react.svg" />
              <Skill name="VueJS" logo="/images/svg/vue.svg" />
              <Skill name="TailwindCSS" logo="/images/svg/tailwind.svg" />
              <Skill name="Laravel" logo="/images/svg/laravel.svg" />
              <Skill name="jQuery" logo="/images/svg/jquery.svg" />
              <Skill name="Bootstrap" logo="/images/svg/bootstrap.svg" />
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-neutral-500 dark:text-neutral-500">
              Tools:
            </span>
          </dt>
          <dd>
            <ul className="flex flex-wrap">
              <Skill name="HashiCorp Vault" logo="/images/svg/vault.svg" />
              <Skill name="Terraform" logo="/images/svg/terraform.svg" />
              <Skill name="Kubernetes" logo="/images/svg/kubernetes.svg" />
              <Skill name="Docker" logo="/images/svg/docker.svg" />
              <Skill name="AWS" logo="/images/svg/aws.svg" />
              <Skill name="Gitlab" logo="/images/svg/gitlab.svg" />
              <Skill name="GitHub" logo="/images/svg/github.svg" />
              <Skill name="BitBucket" logo="/images/svg/bitbucket.svg" />
              <Skill name="Jenkins" logo="/images/svg/jenkins.svg" />
              <Skill name="Jira" logo="/images/svg/jira.svg" />
              <Skill name="Confluence" logo="/images/svg/confluence.svg" />
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-neutral-500 dark:text-neutral-500">
              Databases:
            </span>
          </dt>
          <dd>
            <ul className="flex flex-wrap">
              <Skill name="MySQL" logo="/images/svg/mysql.svg" />
              <Skill name="MariaDB" logo="/images/svg/mariadb.svg" />
              <Skill name="PostgreSQL" logo="/images/svg/postgresql.svg" />
              <Skill name="MongoDB" logo="/images/svg/mongodb.svg" />
              <Skill name="Oracle" logo="/images/svg/oracle.svg" />
            </ul>
          </dd>
        </dl>

        <dl className="flex flex-col sm:flex-row gap-1">
          <dt className="min-w-40">
            <span className="block text-sm text-neutral-500 dark:text-neutral-500">
              Skills:
            </span>
          </dt>
          <dd>
            <ul>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Full Stack Software Engineering
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                CI/CD Pipelines
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                DevSecOps
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Containerization
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Secrets Management
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Infrastructure as Code
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Cloud Migrations
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Consulting
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Team Leadership
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Agile Development
              </li>
              <li className="mr-4 mb-2 inline-flex items-center text-sm text-neutral-800 dark:text-neutral-200">
                Sales Support
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  );
}
