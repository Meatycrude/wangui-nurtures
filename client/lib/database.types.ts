export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          name: string | null;
          email: string;
        };
        Insert: {
          id?: string;
          name?: string | null;
          email: string;
        };
        Update: {
          name?: string | null;
          email?: string;
        };
      };
    };
  };
};
