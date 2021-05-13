import { Field, ObjectType, Query, Resolver } from "type-graphql";
import axios from "axios";

@ObjectType()
class Alert {
  @Field((_) => [String], { nullable: true })
  data!: [String];

  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  title: String;

  @Field({ nullable: true })
  error: String;
}

@Resolver()
export class RedAlertRessolver {
  @Query(() => Alert, { nullable: true })
  async getAlerts() {
    const options = {
      headers: {
        Referer: "https://www.oref.org.il/11226-he/pakar.aspx",
        "X-Requested-With": "XMLHttpRequest",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36",
      },
    };

    const response: Alert = await axios.get(
      "https://www.oref.org.il/WarningMessages/alert/alerts.json",
      options
    );

    console.log(response.data);

    return response.data;
  }
}
