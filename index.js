// Write your solution in this file!
public class Employee {
    private String name;
    private String streetAddress;

    public Employee(String name, String streetAddress) {
        this.name = name;
        this.streetAddress = streetAddress;
    }

    public String getName() {
        return name;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    @Override
    public String toString() {
        return "Employee [name=" + name + ", streetAddress=" + streetAddress + "]";
    }
}
