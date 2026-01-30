import { OrganizationList } from "../components/organization/organization";
import { organizationData } from "../data/leadershipManagement";

export function Organization() {
    return(
        <>
            <main>
                <OrganizationList
                    organization={organizationData}
                 />
            </main>
        </>
    );
}