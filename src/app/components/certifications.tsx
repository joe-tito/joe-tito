import SectionTitle from "./section-title";

export default function Certifications() {
  return (
    <div>
      <SectionTitle title="Certifications" />

      <div className="grid grid-cols-1  gap-3">
        <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
          <img
            src="images/certs/hashicorp-ambassador.png"
            className="size-28"
          />
          <div>
            <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
              2024 HashiCorp Ambassador
            </div>
            <div className="text-xs text-neutral-500">
              HashiCorp Ambassadors are committed to the spirit of learning in
              the open. They share knowledge about HashiCorp tools through
              content creation, local events and productive, thoughtful
              feedback, while advocating and adhering to the HashiCorp
              Principles. Ambassadors support growth of the community, focusing
              on three key elements: Knowledge sharing, Mentorship and Kindness.
            </div>
          </div>
        </div>
        <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
          <img src="images/certs/vault-chip.png" className="size-28" />
          <div>
            <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
              Vault Certified HashiCorp Implementation Partner (CHIP)
            </div>
            <div className="text-xs text-neutral-500">
              Partner practitioners who achieve Vault CHIP certification have
              proven that they understand how to deploy and maintain Vault
              Enterprise in a production customer environment and they
              understand the differentiation between Vault offerings of Open
              Source and Enterprise for private deployment.
            </div>
          </div>
        </div>
        <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
          <img src="images/certs/vault-associate.png" className="size-28" />
          <div>
            <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
              Vault Associate
            </div>
            <div className="text-xs text-neutral-500">
              Vault Associates know the concepts, skills, and use cases
              associated with HashiCorp Vault. They understand and can utilize
              Vault according to the certification objectives. Additionally,
              they understand why enterprises choose to extend Vault Open Source
              with Vault Enterprise to solve business critical objectives.
            </div>
          </div>
        </div>
        <div className="p-4 border border-neutral-200 rounded-lg dark:border-neutral-700 flex space-x-4">
          <img src="images/certs/terraform-associate.png" className="size-28" />
          <div>
            <div className="font-semibold text-lg text-neutral-800 dark:text-neutral-200 mb-2">
              Terraform Associate
            </div>
            <div className="text-xs text-neutral-500">
              Terraform Associates know the basic concepts, skills, and use
              cases associated with open source HashiCorp Terraform. They
              understand and can utilize Terraform according to the
              certification objectives. Additionally, they understand why
              enterprises choose to extend Terraform Open Source with Terraform
              Enterprise to solve business critical objectives.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
